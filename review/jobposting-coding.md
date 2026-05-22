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

Codierung:

- `narrow design`: UX, UI, Brand, Communication Design, Exhibition Design, Design Systems, Mediengestaltung
- `creative/media adjacent`: Redaktion, Content, Social, Publishing, Kommunikation, Marketing Automation
- `non-design Gegenmarker`: Bibliothek, Archiv, Sales, AV-Betrieb, Kulturhandwerk, reine Sachbearbeitung
- `AI/system marker`: Agentic AI, AI Workflow, Automatisierung, Research, Daten, QA, Plattformprodukt

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
