const input = document.querySelector("#vault-search");
const results = document.querySelector("#search-results");
const count = document.querySelector("#search-count");

let pages = [];

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const render = (matches, query) => {
  results.innerHTML = "";
  if (!query) {
    count.textContent = "Suchbegriff eingeben.";
    return;
  }
  count.textContent = `${matches.length} Treffer`;
  for (const page of matches.slice(0, 30)) {
    const item = document.createElement("article");
    item.className = "search-result";
    const title = document.createElement("a");
    title.href = page.url;
    title.textContent = page.title || page.path;
    const meta = document.createElement("p");
    meta.className = "search-meta";
    meta.textContent = [page.type, page.status, page.tags].filter(Boolean).join(" / ");
    const excerpt = document.createElement("p");
    excerpt.textContent = page.content.slice(0, 240).trim();
    item.append(title, meta, excerpt);
    results.append(item);
  }
};

const search = () => {
  const query = normalize(input.value.trim());
  const terms = query.split(/\s+/).filter(Boolean);
  if (!terms.length) {
    render([], "");
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
  render(matches, query);
};

fetch(window.VAULT_SEARCH_INDEX || "search.json")
  .then((response) => {
    if (!response.ok) throw new Error("search index missing");
    return response.json();
  })
  .then((data) => {
    pages = data;
    input.addEventListener("input", search);
  })
  .catch(() => {
    count.textContent = "Suchindex nicht geladen.";
  });
