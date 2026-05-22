---
title: "Fehlstellen und Roadmap"
type: operation
status: ready
created: 2026-05-21
updated: 2026-05-22
tags: [roadmap, gaps]
---

# Fehlstellen und Roadmap

## Was noch fehlt

### 1. Drei offene Claims härten

Die drei offenen Claims sind jetzt als [Claim Hardening Map](review/claim-hardening-map-2026-05-21.md), [Jobposting Coding](review/jobposting-coding.md), [DACH Jobposting Spot Check](wiki/sources/dach-jobposting-spot-check-2026-05-21.md), [Trends und Signale Next Checks](wiki/sources/trends-signale-next-checks-2026-05-21.md) und [Jobposting und Arbeitgeberdaten Check](wiki/sources/jobposting-employer-data-check-2026-05-21.md) geframt.

Nächster Schritt:

- `Juniorrollen`: nicht als pauschalen Verlust claimen; 60 Einstiegsrollen codieren und prüfen, ob Routineproduktion durch Review, Agentenaufsicht, Prototyping oder Lieferverantwortung ersetzt wird
- `Creative Technology`: Sichtbarkeit von Wachstum trennen; Zeitvergleich oder Branchenquelle nachziehen
- `AI-Governance`: Consulting/Security von Finance, HR und Operations trennen
- `Plattformmetriken`: Synthese liegt vor; als Nächstes Portfolios und Rollen auf Designfreiheit, KPI-Logik, Brand Guardrails, Stop-Regeln und Plattform-QA prüfen
- `AI Search`: Sichtbarkeitsrisiko weiter beobachten, aber nicht in Jobverlust übersetzen

### 2. DACH-Jobposting-Daten

Der Vault hat jetzt ein erstes public-safe Sample mit 22 Rollenmarkern und eine codierte Datenseite: [Jobposting Corpus 2026-05-21](wiki/datasets/jobposting-corpus-2026-05-21.md). Dazu kommt ein getrenntes PAGE-Sample mit 33 Creative/Media-Anzeigen: [PAGE Stellenmarkt Design/Media Corpus 2026-05-22](wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md). Round 1 ergänzt 101 Titel-/Listing-Marker aus elf Jobboards: [Job Board Sample Round 1](wiki/datasets/job-board-sample-round-1-2026-05-22.md). Zusammen sind das mehr Ankerpunkte, aber noch kein repräsentatives Korpus.

Nächster Schritt:

- Round-1-Detailseiten auscodieren: Aufgaben, Tools, Seniorität, AI-/Datenmarker, Review, Mentoring, Governance, Portfolioanforderungen
- 50 enge Designanzeigen aus Titel- und Detailcodierung bilden: dasauge, DESIGNERDOCK, Games-Career
- 50 Media-/Marketing-/Plattformanzeigen bilden: W&V, kress, turi2, PAGE adjacent
- 50 Product-/AI-/UX-Anzeigen bilden: Tech in Berlin, WoodyJobs, Hisignal, heise Jobs, Firmenkarrieren
- 30 Informations-/Kultur-/Gegenmarker bilden: BiblioJobs, PAGE countermarker, Games-Career
- 30 Anzeigen Wirtschaft codieren
- Junior/Mid/Senior trennen
- KI-, Daten-, Governance- und Portfolio-Signale erfassen
- PAGE als eigene Zeitreihe weiterführen, weil die Kategorie Design, Medien und Kommunikation sichtbar mischt

### 3. Design-spezifische Arbeitgeberperspektive

Die Designlage ist noch zu stark über BLS, Design Council und Branchenreports gerahmt.

Nächster Schritt:

- Agenturen, Studios, Inhouse-Teams, Produktunternehmen getrennt betrachten
- Creative Technology und AI Production als eigene Rolle prüfen

### 4. Wirtschaft nach Subfeldern aufteilen

Wirtschaft ist zu breit.

Nächster Schritt:

- Finance / Controlling
- Marketing / Sales
- HR
- Operations
- Consulting
- Entrepreneurship

### 5. Beispiele bauen

Der Vault beschreibt Portfolio Evidence. Es fehlen Muster-Cases.

Nächster Schritt:

- ein Wirtschaft-Case
- ein Design-Case
- ein no-AI-baseline Beispiel
- ein Rechte-/Provenance-Beispiel

### 6. Automatisierung

Die ersten Checks liegen als Node-Skripte vor.

Nächster Schritt:

- Linkcheck in GitHub Actions beobachten
- halbjährlichen Source-Refresh als Issue oder Workflow ergänzen
- optional MkDocs prüfen, wenn Navigation größer wird
