---
title: "Evidence Dashboard"
type: review
status: ready
created: 2026-05-22
updated: 2026-05-22
tags: [evidence, claims, dashboard, jobpostings, review]
---

# Evidence Dashboard

Diese Seite ist die Kontrollfläche für Claims. Sie zeigt nicht, was plausibel klingt, sondern was im Vault schon mit Quellen, Grenzen und Gegenchecks geführt wird.

## Status-Legende

| Status | Bedeutung |
|---|---|
| `evidence-linked` | Aussage hat Quellenanschluss und eine explizite Grenze. |
| `directional signal` | Mehrere Hinweise zeigen in dieselbe Richtung, aber Sample oder Kausalität reichen noch nicht für harte Aussage. |
| `spot-check signal` | Einzelne öffentliche Beispiele tragen die Richtung. Kein Marktbild. |
| `rejected` | Der Claim darf öffentlich nicht verwendet werden. |

## Claim-Stand

| Claim | Status | Beste Quellen | Grenze | Nächste Aktion |
|---|---|---|---|---|
| KI verändert Aufgabenbündel stärker als ganze Berufe. | evidence-linked | [ILO](../wiki/sources/ilo-generative-ai-jobs-2025.md), [OECD](../wiki/sources/oecd-skills-outlook-2025.md) | Exposition ist nicht Adoption. | DACH-Jobkorpus weiter ausbauen. |
| Employability ist mehr als Toolkenntnis. | evidence-linked | [WEF](../wiki/sources/wef-future-of-jobs-2025.md), [Bundesnetzagentur](../wiki/sources/bundesnetzagentur-ki-kompetenz-2025.md), [IAB](../wiki/sources/iab-generative-ki-betriebe-2026.md) | Tooltempo kann kurzfristig zählen. | Portfolio-Beispiele ergänzen. |
| Routineautomatisierung kann Einstiegslernen schwächen. | directional signal | [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md), [PAGE Corpus](../wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md), [Job Board Sample Round 1](../wiki/datasets/job-board-sample-round-1-2026-05-22.md), [AI in Design Report](../wiki/sources/designer-fund-ai-in-design-report-2026.md) | Keine DACH-Zeitreihe; Round 1 zeigt Einstiegsmarker, aber noch keine Detailcodierung der Lernaufgaben. | Junior-, Trainee-, Werkstudenten- und Praktikumsrollen detailcodieren. |
| Wirtschaftswert verschiebt sich zu Entscheidung, Risiko und Umsetzung. | evidence-linked | [BLS Management Analysts](../wiki/sources/bls-management-analysts-2024-2034.md), [OECD AI in Finance](../wiki/sources/oecd-ai-in-finance.md) | Subfelder unterscheiden sich stark. | Finance, HR, Operations, Consulting trennen. |
| Designwert verschiebt sich von Variantenproduktion zu Direction, System, Rechte und QA. | evidence-linked | [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md), [PAGE Corpus](../wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md), [Job Board Sample Round 1](../wiki/datasets/job-board-sample-round-1-2026-05-22.md), [BLS Web/Digital Designers](../wiki/sources/bls-web-digital-designers-2024-2034.md), [Design Council](../wiki/sources/design-council-design-economy.md) | DACH-Designstellen sind breiter sichtbar, aber Round 1 ist listingnah. | Enge Designrollen mit Detailseiten prüfen: Aufgaben, Tools, QA, Portfolio. |
| Plattformen automatisieren Teile von Asset-Erstellung, Variantenbildung und Optimierung. | evidence-linked | [Platform Creative Automation](../wiki/sources/platform-creative-automation-2026.md), [Azerion/Hawk DSP](../wiki/sources/azerion-admove-hawk-dsp-agentic-creative-production-2026.md) | Produktlogik ist keine neutrale Wirkungsmessung. | Plattformmetriken mit Rollenprofilen verbinden. |
| Portfolio muss Prozess, Prüfung und Entscheidung zeigen. | evidence-linked | [BLS Graphic Designers](../wiki/sources/bls-graphic-designers-2024-2034.md), [BLS Web/Digital Designers](../wiki/sources/bls-web-digital-designers-2024-2034.md), [WEF](../wiki/sources/wef-future-of-jobs-2025.md) | Arbeitgeber unterscheiden sich. | Muster-Cases bauen. |
| KI-Design wird Trust- und Kontrollarchitektur. | evidence-linked | [Atlassian AI Design](../wiki/sources/atlassian-ai-design-nondeterminism-trust-2026.md), [AI in Design Report](../wiki/sources/designer-fund-ai-in-design-report-2026.md), [Trends Checks](../wiki/sources/trends-signale-next-checks-2026-05-21.md) | Wirksamkeitsdaten fehlen. | AI-Product-Design-Rollen nachcodieren. |
| Agenturwachstum kann sich teilweise von Headcount entkoppeln. | evidence-linked | [BVDW Internetagentur-Ranking](../wiki/sources/bvdw-internet-agency-ranking-2026-ai-value-driver.md) | Keine monokausale KI-Erklärung. | Agenturrollen und Umsatz-/Teamdaten getrennt lesen. |
| Creative Production rückt in Media-Buying-Infrastruktur. | evidence-linked | [Azerion/Hawk DSP](../wiki/sources/azerion-admove-hawk-dsp-agentic-creative-production-2026.md), [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md) | Keine unabhängige Wirkungsmessung. | Creative-Ops- und Programmatic-Rollen erweitern. |
| KI-Suche wird zum Sichtbarkeits- und Monetarisierungsrisiko. | evidence-linked | [Trends Checks](../wiki/sources/trends-signale-next-checks-2026-05-21.md) | Kein direkter Arbeitsmarktclaim. | Search-/Publisher-Daten halbjährlich prüfen. |
| Plattformmetriken verengen und verschieben Gestaltungsspielräume. | directional signal | [Plattformmetriken und Designfreiheit](../wiki/syntheses/plattformmetriken-und-designfreiheit.md), [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md), [PAGE Corpus](../wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md), [AGF/Amazon](../wiki/sources/agf-youtube-video-measurement-platform-metrics-2026.md), [Platform Creative Automation](../wiki/sources/platform-creative-automation-2026.md) | Optimierung ist keine Designqualität; PAGE zeigt Rollenmarker, keine Wirkungsmessung. | Portfolios und Rollen auf Stop-Regeln, Brand Invariants und Plattform-QA codieren. |
| Media- und Marketingrollen verlangen stärkere Plattform- und Messkompetenz. | directional signal | [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md), [PAGE Corpus](../wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md), [Job Board Sample Round 1](../wiki/datasets/job-board-sample-round-1-2026-05-22.md), [BVDW/OVK](../wiki/sources/bvdw-ovk-prognose-digitaler-werbemarkt-2026.md) | Round 1 stärkt Social, Performance, CRM und Product Marketing, aber noch nicht neutrale Messwährungen. | Media-/Marketingrollen auf KPI, Tracking, Attribution, Plattformen und Stop-Regeln codieren. |
| Creative-Technology-Rollen werden im DACH-Designmarkt sichtbar. | spot-check signal | [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md), [PAGE Corpus](../wiki/datasets/page-stellenmarkt-design-media-corpus-2026-05-22.md), [Job Board Sample Round 1](../wiki/datasets/job-board-sample-round-1-2026-05-22.md), [DACH Jobposting Spot Check](../wiki/sources/dach-jobposting-spot-check-2026-05-21.md) | Sichtbarkeit ist kein Wachstum; Round 1 zeigt Titelmarker wie Creative Technologist, 3D/AI Generalist, Design Engineer und Technical Artist. | Detailseiten und Zeitvergleich nachziehen. |
| AI-Governance taucht in einzelnen Einstiegsprofilen auf. | spot-check signal | [Jobposting Corpus](../wiki/datasets/jobposting-corpus-2026-05-21.md), [Bundesnetzagentur](../wiki/sources/bundesnetzagentur-ki-kompetenz-2025.md) | HR und Operations fehlen. | Finance, HR, Operations und Consulting getrennt codieren. |
| Lokale Hochschulgaps sind claim-ready belegt. | rejected | internal review | Human Review und Vollcodierung fehlen. | Nicht öffentlich verwenden. |

## Korpus-Stand

| Korpus | Stand | Lücke |
|---|---|---|
| Jobposting Corpus 2026-05-21 | 22 Rollenmarker, public-safe codiert | Noch kein repräsentatives Korpus. |
| PAGE Stellenmarkt 2026-05-22 | 33 PAGE-Anzeigen als Creative/Media-Sample | Nicht mit engem Designmarkt vermischen. |
| Job Board Watchlist 2026-05-22 | Suchmatrix für PAGE, enges Design, Media/Marketing/Plattform, Product/AI/UX und Gegenmarker | Noch keine neue Rollen-Codierung, nur Erhebungsplan. |
| Job Board Sample Round 1 2026-05-22 | 101 Titel-/Listing-Marker aus elf Jobboards | Kein Marktanteil; Detailseiten fehlen. |
| Designrollen | 9 im ersten Corpus plus 9 PAGE-nahe Design/Creative-Rollen plus 22 Round-1-Marker | PAGE und Round 1 getrennt halten; Detailcodierung bleibt Ziel. |
| Wirtschafts-/Governance-Rollen | 5 | 25 weitere Rollen, Subfelder trennen. |
| Media-/Marketingrollen | 8 im ersten Corpus plus 13 PAGE-Kommunikations-/Redaktionsrollen plus 29 Round-1-Marker aus Media/Marketing/Adjacent | Programmatic, Retail Media und Marketing Analytics separat nachziehen. |
| Product/AI/UX | erste Marker aus Jobposting Corpus und PAGE plus 32 Round-1-Marker | AI Product und UX-Detailseiten getrennt codieren. |
| Games/VFX/3D/Information | 18 Round-1-Gegen- und Vertiefungsmarker | Als eigene Vertiefung führen, nicht in engen Designmarkt kippen. |
| Junior/Einstieg | 9 im ersten Corpus plus wenige PAGE-Einstiegsrollen plus Round-1-Juniormarker | Nur Rollen mit echter Einstiegs- und Lernaufgabencodierung für Juniorclaim zählen. |

## Nächste Arbeitsreihenfolge

1. Round-1-Detailseiten pro Spur auscodieren.
2. Juniormarker getrennt prüfen: Praktikum, Werkstudent, Trainee, Junior.
3. Design- und Media-Rollen auf Plattform-QA, Stop-Regeln und Guardrails codieren.
4. Portfolio Evidence mit drei Muster-Cases belegen.
5. PAGE monatlich oder quartalsweise wiederholen, getrennt von generischen Jobbörsen.
6. Source-Refresh halbjährlich automatisieren.
