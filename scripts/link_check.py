from pathlib import Path
import re
import sys
import os

ROOT = Path.cwd()
LINK_RE = re.compile(r"\[[^\]\n]+\]\(([^)]+)\)")


def iter_files():
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [name for name in dirnames if name not in {".git", "_site", "node_modules"}]
        for filename in filenames:
            path = Path(dirpath) / filename
            if path.suffix == ".md":
                yield path


missing = []
for path in iter_files():
    text = path.read_text(encoding="utf-8")
    for match in LINK_RE.finditer(text):
        raw = match.group(1)
        target = raw.split("#", 1)[0]
        if not target or target.startswith(("http", "mailto:")):
            continue
        full = Path(os.path.normpath(path.parent / target))
        if not full.exists():
            missing.append(f"{path.relative_to(ROOT)}: {raw} -> {full}")

if missing:
    print("Link check failed:", file=sys.stderr)
    print("\n".join(missing), file=sys.stderr)
    sys.exit(1)

print(f"relative markdown links ok: {sum(1 for _ in iter_files())} files")
