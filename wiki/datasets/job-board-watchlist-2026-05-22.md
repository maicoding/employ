---
title: "Job Board Watchlist 2026-05-22"
type: dataset
status: ready
created: 2026-05-22
updated: 2026-05-22
tags: [dataset, jobboards, jobpostings, design, media, marketing, product, ux, games, information]
source: "../sources/job-board-search-expansion-2026-05-22.md"
---

# Job Board Watchlist 2026-05-22

## Zweck

Diese Watchlist trennt Suchorte nach ihrer Korpus-Rolle. PAGE bleibt wichtig, gerade weil es breit und unscharf ist. Die Vielfalt wird nicht bereinigt, sondern codiert.

## Korpus-Spuren

| Spur | Ziel | Warum |
|---|---|---|
| `boundary_page` | PAGE als gemischtes Creative/Media-Feld erhalten | Zeigt, wie Design, Redaktion, Social, Kommunikation, Publishing, Bibliothek, E-Commerce und Produktarbeit ineinanderlaufen. |
| `narrow_design` | engere Designrollen erfassen | Prüft, was wirklich Design/UX/Brand/Mediengestaltung ist. |
| `media_marketing_platform` | Marketing, Media, PR, Performance, Plattformarbeit erfassen | Prüft KPI-, Plattform-, CRM-, Social- und Programmatic-Verschiebungen. |
| `product_ai_ux` | Product, AI Product, UX, Research, Design Engineering erfassen | Prüft AI-, Produkt-, Research- und Systemrollen. |
| `information_culture_countermarker` | Bibliothek, Archiv, Games, VFX, Kultur, Handwerk erfassen | Hält Gegenmarker sichtbar: Nicht alles wird Plattform- oder AI-Design. |

## Watchlist

| Quelle | URL | Corpus-Rolle | Sampling-Ziel | Codierhinweis | Grenze |
|---|---|---|---:|---|---|
| PAGE Stellenmarkt | https://stellenmarkt.page-online.de/jobs/ux-und-ui-design | `boundary_page` | 30-40 sichtbare Anzeigen je Lauf | Vielfalt behalten; jede Rolle als `narrow_design`, `adjacent` oder `countermarker` markieren. | Kein enger Designmarkt. |
| dasauge Stellenmarkt | https://dasauge.de/jobs/ | `narrow_design` + `information_culture_countermarker` | 30 Festrollen, 10 Freelance, 10 Praktikum | Sehr gut für Art Direction, Mediengestaltung, Packaging, Motion, Illustration, Social, Freelancer. | Enthält auch Gesuche und Kleinstaufträge; getrennt codieren. |
| DESIGNERDOCK | https://designerdock.com/fuer-bewerber/stellenangebote/ | `narrow_design` + Agenturmarkt | 20 Rollen | Gute Quelle für Agentur, Marketing, Design, Digital, Werbung. | Recruiter-Auswahl, nicht vollständiger Markt. |
| W&V Stellenmarkt | https://stellenmarkt.wuv.de/ | `media_marketing_platform` | 30 Rollen | Marketing, Agenturen, Media, E-Commerce, Kreation, CRM, Social, Performance. | Breiter Kommunikationsmarkt, keine reine Designquelle. |
| kress Jobs | https://kress.de/jobs | `media_marketing_platform` | 20 Rollen | Journalismus, PR, Volontariat, Online/Social, Grafik/Design, Marketing-Kommunikation. | Medienfokus; Design nur Teilbereich. |
| turi2 Jobs | https://www.turi2.de/aktuell/turi2-jobs/ | `media_marketing_platform` | 10 Rollen | Schneller Radar für Medien, Marketing, PR, Kommunikation. | Kleine Auswahl, teils Weiterleitungen. |
| BiblioJobs | https://bibliojobs.eu/ | `information_culture_countermarker` | 20 Rollen | Bibliothek, Archiv, Informationseinrichtungen, Datenmanagement, Informationskompetenz. | Nicht Design, aber wichtig wegen PAGE-Mix und Gegenmarkern. |
| Tech in Berlin Product Jobs | https://www.techinberlin.com/product/jobs | `product_ai_ux` | 30 Rollen | Product, Design, AI Product, Product Engineering, Junior Brand/Marketing Design. | Berlin-/Startup-Bias. |
| WoodyJobs Berlin | https://www.woodyjobs.com/berlin | `product_ai_ux` | 20 Rollen | Product und Design in Berlin, auch AI/VR. | Aggregator; Dubletten prüfen. |
| Hisignal Product/UX | https://hisignal.io/de/jobs/product-ux-design-jobs-in-berlin/ | `product_ai_ux` | 20 Rollen | Product, UX, AI Product Design. | Aggregator; Linkstabilität prüfen. |
| heise Jobs Marketing/Design | https://jobs.heise.de/marketing-design/jobs/ui-ux-designer-in-berlin | `product_ai_ux` | 15 Rollen | UI/UX, Product Design, Working Student, Conversational AI. | Tech-Jobbörsen-Bias. |
| Games-Career | https://www.games-career.com/ | `information_culture_countermarker` + `narrow_design` | 20 Rollen | Game Art, Art/Layout/Illustration, Game Design, Product/Producing, QA. | Games-Markt ist volatil und nicht direkt auf Design allgemein übertragbar. |

## Warum PAGE-Vielfalt wichtig bleibt

PAGE wirkt auf den ersten Blick unsauber, ist aber analytisch stark. Die Mischung zeigt, dass öffentliche Kreativarbeit nicht entlang sauberer Studiengangs- oder Berufsgrenzen ausgeschrieben wird. Design liegt neben Redaktion, Social, Marketing, Publishing, Bibliothek, E-Commerce und Produktarbeit. Das ist kein Fehler im Sample, sondern ein Arbeitsmarktmerkmal.

## Zählregel

- PAGE zählt nicht direkt in `narrow_design` hinein.
- PAGE-Rollen bekommen zusätzlich `relation_to_design`: `narrow_design`, `creative_media_adjacent`, `platform_adjacent`, `information_culture_countermarker`, `non_design`.
- Harte Designclaims nutzen nur Rollen mit `narrow_design`.
- Creative/Media-Claims dürfen PAGE vollständig nutzen, aber mit Grenze.
- Juniorclaims zählen nur echte Einstiegsrollen im passenden Feld.

## Nächster Erhebungslauf

1. PAGE erneut erfassen und Relation-to-Design ergänzen.
2. dasauge als erstes engeres Designsample codieren.
3. W&V und kress als Media/Marketing/Plattformsample codieren.
4. Tech in Berlin als Product/AI/UX-Sample codieren.
5. BiblioJobs und Games-Career als Gegenmarker-Sample codieren.
