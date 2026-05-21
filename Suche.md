---
title: "Suche"
type: index
status: ready
created: 2026-05-21
updated: 2026-05-21
tags: [search, index]
---

# Suche

Durchsucht Titel, Pfade, Tags und Seiteninhalt dieses Archivs.

<div class="search-panel">
  <label for="vault-search">Suchbegriff</label>
  <input id="vault-search" class="search-input" type="search" autocomplete="off" aria-label="Archiv durchsuchen">
  <p id="search-count" class="search-count">Suchbegriff eingeben.</p>
  <div id="search-results" class="search-results"></div>
</div>

## Suchhinweise

- Fuer Begriffe siehe [Begriffsindex](Begriffsindex.md).
- Fuer die Gesamtstruktur siehe [Strukturkarte](Strukturkarte.md).
- Fuer belastbare Aussagen siehe [Belastbare Aussagen](Belastbare_Aussagen.md).

<script>
  window.VAULT_SEARCH_INDEX = "{{ '/search.json' | relative_url }}";
</script>
<script src="{{ '/assets/search.js' | relative_url }}" defer></script>
