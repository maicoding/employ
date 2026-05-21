---
title: "GitHub Pages Setup Plan"
type: playbook
status: draft
created: 2026-05-21
updated: 2026-05-21
tags: [github-pages, publishing]
---

# GitHub Pages Setup Plan

## Reihenfolge

1. Vault stabilisieren.
2. Public-Safe-Lint ausfuehren.
3. Lizenz- und Quellenhinweis schreiben.
4. Publish-Variante entscheiden.
5. GitHub-Repo anlegen oder bestehendes Repo nutzen.
6. Pages aktivieren.
7. Update-Workflow automatisieren.

## Variante A: GitHub Pages aus Root

Vorteil:

- simpel
- kein Build-Schritt
- Markdown bleibt sichtbar

Nachteil:

- Navigation ist begrenzt
- Obsidian-Wikilinks muessen als Markdown-Links sauber sein

## Variante B: MkDocs

Vorteil:

- gute Navigation
- Suche
- klare Website-Struktur

Nachteil:

- Build-Schritt
- Konfiguration und Theme noetig

## Empfehlung fuer diesen Vault

Erst Variante A fuer schnelle Veroeffentlichung. Danach MkDocs, wenn die Struktur waechst.

## Automatisierungsideen

- Linkcheck
- Public-Safe-Grep
- Source-Refresh-Issue
- halbjaehrlicher Radar-Run
- automatischer Indexcheck

