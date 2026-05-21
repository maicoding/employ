let pages = [];

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const panels = () =>
  [...document.querySelectorAll(".vault-search-input")].map((input) => {
    const scope = input.closest(".search-panel") || input.closest(".side-nav") || document;
    return {
      input,
      results: scope.querySelector("[data-search-results]"),
      count: scope.querySelector("[data-search-count]")
    };
  });

const excerptFor = (page, terms) => {
  const content = page.content || "";
  const lower = normalize(content);
  const first = terms.map((term) => lower.indexOf(term)).filter((pos) => pos >= 0).sort((a, b) => a - b)[0] || 0;
  const start = Math.max(0, first - 80);
  return `${start > 0 ? "..." : ""}${content.slice(start, start + 260).trim()}`;
};

const render = (panel, matches, query, terms) => {
  const { results, count } = panel;
  if (!results || !count) return;
  results.innerHTML = "";
  if (!query) {
    count.textContent = "Suchbegriff eingeben.";
    return;
  }
  count.textContent = `${matches.length} Treffer`;
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = "Keine Treffer.";
    results.append(empty);
    return;
  }
  for (const page of matches.slice(0, 30)) {
    const item = document.createElement("article");
    item.className = "search-result";
    const title = document.createElement("a");
    title.href = page.url;
    title.textContent = page.title || page.path;
    const meta = document.createElement("p");
    meta.className = "search-meta";
    meta.textContent = [page.type, page.status, page.tags, page.path].filter(Boolean).join(" / ");
    const excerpt = document.createElement("p");
    excerpt.textContent = excerptFor(page, terms);
    item.append(title, meta, excerpt);
    results.append(item);
  }
};

const runSearch = (panel) => {
  const { input } = panel;
  const query = normalize(input.value.trim());
  const terms = query.split(/\s+/).filter(Boolean);
  if (!terms.length) {
    render(panel, [], "", []);
    return;
  }
  const matches = pages
    .map((page) => {
      const haystack = normalize(
        [page.title, page.path, page.type, page.status, page.tags, page.content].join(" ")
      );
      const score = terms.reduce((sum, term) => {
        if (!haystack.includes(term)) return sum;
        const titleHit = normalize(page.title || "").includes(term) ? 5 : 0;
        const tagHit = normalize(page.tags || "").includes(term) ? 3 : 0;
        return sum + 1 + titleHit + tagHit;
      }, 0);
      return { ...page, score };
    })
    .filter((page) => page.score >= terms.length)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  render(panel, matches, query, terms);
};

fetch(window.VAULT_SEARCH_INDEX || "search.json")
  .then((response) => {
    if (!response.ok) throw new Error("search index missing");
    return response.json();
  })
  .then((data) => {
    pages = data;
    for (const panel of panels()) {
      panel.input.addEventListener("input", () => runSearch(panel));
    }
    document.addEventListener("keydown", (event) => {
      const active = document.activeElement;
      const typing = active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName);
      if (event.key !== "/" || typing) return;
      const firstInput = panels()[0]?.input;
      if (!firstInput) return;
      event.preventDefault();
      firstInput.focus();
    });
  })
  .catch(() => {
    for (const panel of panels()) {
      if (panel.count) panel.count.textContent = "Suchindex nicht geladen.";
    }
  });
