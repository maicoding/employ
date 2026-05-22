---
title: "Jobposting Coding"
type: review
status: ready
created: 2026-05-21
updated: 2026-05-22
tags: [jobpostings, coding, dach, juniorrollen, creative-technology, ai-governance]
---

# Jobposting Coding

Ziel: öffentliche Stellenanzeigen so codieren, dass Claims im Vault nachziehbar bleiben. Keine langen Kopien aus Anzeigen. Nur Titel, Link, Abrufdatum und eigene Codierung.

Aktuelle Durchläufe:

- [Jobposting und Arbeitgeberdaten Check 2026-05-21](../wiki/sources/jobposting-employer-data-check-2026-05-21.md), codiert als [Jobposting Corpus 2026-05-21](../wiki/datasets/jobposting-corpus-2026-05-21.md).
- [PAGE Stellenmarkt Design/Media Spot Check 2026-05-22](../wiki/sources/page-stellenmarkt-design-media-spot-check-2026-05-22.md), codiert als [PAGE Stellenmarkt Design/Media Corpus 2026-05-22](../wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md).
- [Job Board Search Expansion 2026-05-22](../wiki/sources/job-board-search-expansion-2026-05-22.md), codiert als [Job Board Watchlist 2026-05-22](../wiki/datasets/job-board-watchlist-2026-05-22.md).
- [Job Board Sample Round 1 2026-05-22](../wiki/sources/job-board-sample-round-1-2026-05-22.md), codiert als [Job Board Sample Round 1 2026-05-22](../wiki/datasets/job-board-sample-round-1-2026-05-22.md).

## Minimum Dataset

| Feld | Werte |
|---|---|
| `url` | öffentliche URL |
| `accessed` | Abrufdatum |
| `country_city` | Land und Stadt, falls sichtbar |
| `field` | Design, Wirtschaft, Marketing, Finance, HR, Operations, Consulting, Security |
| `level` | Junior, Associate, Trainee, Graduate, Mid, Senior, unklar |
| `role_title` | sichtbarer Rollentitel |
| `ai_markers` | AI-Tools, Agenten, AI-Coding, Generative AI, AI Design |
| `governance_markers` | Governance, Risiko, EU AI Act, Compliance, Audit, Freigabe |
| `creative_tech_markers` | Creative Technology, Design Engineering, Pipeline, ComfyUI, Scripting, Modellarbeit |
| `junior_learning_markers` | Mentoring, Review, Ownership, Prototyping, echte Lieferung, Feedback |
| `counter_markers` | klassische Toolbedienung, reine Ausführung, keine AI-Nennung, keine Governance |
| `claim_note` | ein Satz: was trägt diese Anzeige, was nicht |

## PAGE-Regel

PAGE wird getrennt geführt. Die Kategorie ist wertvoll für Creative/Media-Signale, aber zu breit für enge Designmarkt-Zählungen.

Die Vielfalt bleibt erhalten. PAGE ist nicht "falsch sortiert", sondern zeigt, wie der öffentliche Creative-Arbeitsmarkt tatsächlich ausgespielt wird: Design steht neben Redaktion, Social, Kommunikation, Publishing, Bibliothek, E-Commerce und Produktarbeit.

Codierung:

- `narrow design`: UX, UI, Brand, Communication Design, Exhibition Design, Design Systems, Mediengestaltung
- `creative/media adjacent`: Redaktion, Content, Social, Publishing, Kommunikation, Marketing Automation
- `non-design Gegenmarker`: Bibliothek, Archiv, Sales, AV-Betrieb, Kulturhandwerk, reine Sachbearbeitung
- `AI/system marker`: Agentic AI, AI Workflow, Automatisierung, Research, Daten, QA, Plattformprodukt

## Korpusspuren

| Spur | Primäre Quellen | Upgrade-Ziel | Was zählt |
|---|---|---:|---|
| `boundary_page` | PAGE | 30-40 je Lauf | Alle sichtbaren Rollen, aber mit `relation_to_design`. |
| `narrow_design` | dasauge, DESIGNERDOCK, Games-Career Design/Art | 50 Rollen | UX, UI, Brand, Communication Design, Art Direction, Mediengestaltung, Motion, Exhibition, Game Art. |
| `media_marketing_platform` | W&V, kress, turi2, PAGE adjacent | 50 Rollen | Social, PR, CRM, Performance, Programmatic, Content, Redaktion, Plattformsteuerung. |
| `product_ai_ux` | Tech in Berlin, WoodyJobs, Hisignal, heise Jobs, Firmenkarrieren | 50 Rollen | Product Design, AI Product, UX Research, Product Management, Design Engineering, Product Engineering. |
| `information_culture_countermarker` | BiblioJobs, PAGE countermarker, Games-Career, Kulturstellen | 30 Rollen | Bibliothek, Archiv, Informationskompetenz, Datenmanagement, Game/VFX/3D, Kulturhandwerk. |

Round 1 am 22.05.2026 liefert 101 Titel-/Listing-Marker. Das ist ein Suchraum-Sample. Für Claim-Upgrades zählen erst Detailcodierungen mit Aufgaben, Tools, Seniorität, Mentoring, Review, Governance und Plattformmetriken.

## Claim-Fragen

| Claim | Coding-Frage |
|---|---|
| Juniorrollen verlieren klassische Lernaufgaben. | Wird Routineproduktion ersetzt, überlagert oder bleibt sie explizit Lernaufgabe? |
| Creative-Technology-Rollen wachsen im DACH-Designmarkt. | Taucht die Rolle nur als Titel auf, oder werden AI-Workflow, Scripting, Modellarbeit und Designurteil zusammen verlangt? |
| AI-Governance wird in Wirtschaftseinstiegsrollen sichtbar. | Ist Governance im Titel, in Aufgaben oder nur als Randvokabular sichtbar? |

## Upgrade-Schwellen

- `spot-check signal`: 3-5 öffentliche Beispiele, gleiche Richtung, klare Grenze.
- `directional signal`: mindestens 20 codierte Anzeigen plus zweite Quelle.
- `evidence-linked`: mindestens 60 codierte Anzeigen, Subfelder getrennt, Gegenbeispiele notiert.

## Public-Safe Regel

Die Anzeige wird nicht archiviert und nicht lang zitiert. Der Vault speichert nur Link, Rolle, Marker und eigene Auswertung. Wenn ein Posting offline geht, bleibt es als ehemaliger Spot-Check markiert und darf nicht mehr als aktuelle Stellenlage genutzt werden.
