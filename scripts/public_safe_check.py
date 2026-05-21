from pathlib import Path
import re
import sys
import os

ROOT = Path.cwd()
FORBIDDEN = [
    re.compile(r"\bFH\b", re.IGNORECASE),
    re.compile(r"Dortmund", re.IGNORECASE),
    re.compile(r"Horizont", re.IGNORECASE),
    re.compile(r"\bDIE ZEIT\b", re.IGNORECASE),
    re.compile(r"\bFAZ\b", re.IGNORECASE),
    re.compile(r"\bSPIEGEL\b", re.IGNORECASE),
    re.compile(r"file://", re.IGNORECASE),
    re.compile(r"/Users/claudiamai", re.IGNORECASE),
    re.compile(r"\[\["),
    re.compile(r"TODO|TBD|Lorem", re.IGNORECASE),
]

ALLOWED = {
    Path("wiki/operations/public-safe-lint.md"),
}


def iter_files():
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [name for name in dirnames if name not in {".git", "_site", "node_modules"}]
        for filename in filenames:
            path = Path(dirpath) / filename
            if path.suffix in {".md", ".html"}:
                yield path


hits = []
for path in iter_files():
    rel = path.relative_to(ROOT)
    if rel in ALLOWED:
        continue
    text = path.read_text(encoding="utf-8")
    for number, line in enumerate(text.splitlines(), 1):
        for pattern in FORBIDDEN:
            if pattern.search(line):
                hits.append(f"{rel}:{number}: {line.strip()}")

if hits:
    print("Public-safe check failed:", file=sys.stderr)
    print("\n".join(hits), file=sys.stderr)
    sys.exit(1)

print("public-safe check ok")
