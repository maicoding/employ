---
title: "Jobposting Corpus 2026-05-21"
type: dataset
status: spot-check
created: 2026-05-22
updated: 2026-05-22
tags: [dataset, jobpostings, dach, design, wirtschaft, media, governance, juniorrollen]
source: "../sources/jobposting-employer-data-check-2026-05-21.md"
sample_size: 22
---

# Jobposting Corpus 2026-05-21

Dieser Datensatz macht den [Jobposting und Arbeitgeberdaten Check](../sources/jobposting-employer-data-check-2026-05-21.md) filterbar. Er ist kein repräsentatives Marktbild. Er ist ein codierter Spot-Check für wiederholbare Auswertung.

## Felder

| Feld | Bedeutung |
|---|---|
| `id` | stabile Corpus-ID |
| `role` | sichtbarer Rollentitel und Arbeitgeber |
| `field` | grobes Arbeitsfeld |
| `level` | Junior, Einstieg, Mid, Senior, Lead oder unklar |
| `region` | sichtbarer Ort oder DACH, falls verteilt |
| `markers` | eigene Codierung der Skill- und Aufgabenmarker |
| `countermarkers` | Gegenmarker oder Grenze |
| `claim_link` | Claim, den die Anzeige stützt oder begrenzt |
| `source` | öffentliche URL |

## Corpus

| id | role | field | level | region | markers | countermarkers | claim_link | source |
|---|---|---|---|---|---|---|---|---|
| JP001 | Ficus Health, Product Designer Junior/Intermediate | Design/Product | Junior/Intermediate | Berlin | Figma, Linear, GitHub, echte Codebase, KI-gestützte Workflows, Accessibility-Audits, QA, Design System | Startup-Sample, keine Aussage über alle Juniorrollen | Juniorarbeit wird näher an Code, QA und Lieferung gezogen | [Link](https://careers.merantix-aicampus.com/companies/ficus-health/jobs/77570342-product-designer-junior-intermediate) |
| JP002 | &why, Junior UX/UI Designer | Design/UX | Junior | München/Berlin | Motion, Prototyping, experimentelle digitale Experiences, AI als Prozesswerkzeug, Feedbackkultur | Kein harter Governance- oder Messmarker | Juniorprofil verlangt Prozess, Bewegung, Feedback und Toolreflexion | [Link](https://www.why.de/careers/junior-ux-ui-designer/) |
| JP003 | D-LABS, Digital Experience Designer | UX/Service Design | Junior | Potsdam/Berlin/Stuttgart | Figma, Design Libraries, Use Cases, User Stories, Workshops, Portfolio | Kein AI-Schwerpunkt; klassische UX-Grundlagen bleiben zentral | Gegenbeleg gegen reine AI-Erzählung | [Link](https://www.d-labs.com/en/jobs/digital_experience_designer.html) |
| JP004 | Tacto, Junior Product Designer | Product Design | Junior | München | AI-Tools, komplexe B2B-Workflows, Prototyping, Research, AI-human Interaction | Startup- und B2B-Kontext | Juniorarbeit wird anspruchsvoller gerahmt | [Link](https://jobs.ashbyhq.com/tacto/c52d6138-bf87-4a20-8998-9976630aba92) |
| JP005 | MCI, Junior Designer Schwerpunkt Creative AI | Design/Creative AI | Junior | DACH/unklar | Creative AI im Titel, Designbezug | Nur Titelmarker; erneuter Abruf nötig, wenn Posting offline geht | AI-nahe Juniorrollen sind sichtbar | [Link](https://join.com/companies/wearemci/16108272-junior-designer-m-w-d-schwerpunkt-creative-ai) |
| JP006 | TwinCloud, Werkstudent:in Figma/UI-Design | Design/Studentisch | Einstieg | DACH/remote unklar | Figma, Copilot/ChatGPT-Offenheit | Studentische Rolle, geringe Marktabdeckung | AI-Toolumgang reicht bis in studentische Designarbeit | [Link](https://join.com/companies/twincloudai/15849458-werkstudent-in-figma-ui-design) |
| JP007 | neural frames, Creative Technologist AI Music Video | Creative Technology | Mid/unklar | Berlin | Prompting, Video-/Bildmodelle, Outputqualität, Failure Modes, Templates, AI Coding, Scripting | Kein Wachstumsnachweis | Creative Technology bündelt Gestaltung, Modellarbeit und QA | [Link](https://join.com/companies/neuralframescom/16129440-creative-technologist-ai-music-video) |
| JP008 | Hyperinteractive, Creative Technologist | Creative Technology | Mid/Senior | DACH/unklar | Prototyping, Technologie, Interaktion, Creative Coding | Nicht AI-spezifisch genug für AI-Wachstumsthese | Creative Technology ist als Rolle sichtbar | [Link](https://www.hyperinteractive.de/jobs/creative-technologist/) |
| JP009 | Black Forest Labs, Creative Technologist | Creative Technology | unklar | Freiburg | generative Bildmodelle, Workflow, visuelle Qualität | Einzelner AI-native Arbeitgeber | AI-native Creative-Technology-Arbeit ist sichtbar | [Link](https://job-boards.greenhouse.io/blackforestlabs/jobs/5142284008?gh_src=SV+Angel+job+board) |
| JP010 | KPMG, Junior Consultant AI Security & Governance | Consulting/Finance/Security | Einstieg/Absolvent:innen | Deutschland | AI Security, Governance-Strukturen, AI Risk, Prompt Injection, Model Inversion, AI Ethics | stark technisch/reguliert | AI-Governance taucht im Einstieg auf | [Link](https://www.kimeta.de/stellenangebot/kpmg-ag-wirtschaftspruefungsgesellschaft-kpmg-deutschland/junior-consultant-ai-security-governance-w-m-d/961419449.html) |
| JP011 | Forvis Mazars, Junior Consultant Cyber Risk & Operational Resilience | Consulting/Risk | Junior | Zürich | Cyber Risk, Operational Resilience, Data Protection, AI Governance als Projektthema | Schweiz, Beratungskontext | Governance ist regulierte Beratungsarbeit | [Link](https://join.com/companies/mazars/jobs/16132170-junior-consultant-cyber-risk-and-operational-resilience) |
| JP012 | VIAMA, Junior Consultant Sicherheit, Compliance & Struktur | Consulting/Compliance | Junior | Forchheim | NIS2, ISO 27001, TISAX, CRA, Dokumentation, Nachweislisten, Workshops, Mentoring | Compliance, nicht ausdrücklich AI | Einstieg heißt Auditvorbereitung und Nachweisarbeit | [Link](https://join.com/companies/plattformx/16010178-junior-consultant-m-w-d-sicherheit-compliance-und-struktur) |
| JP013 | DIGITAL IMPACTS, Consultant IT Governance, Risk & Compliance Technology | Finance/GRC | Consultant | DACH/unklar | Financial Services, IT Compliance, Risiko, Kontrollen, Umsetzung | nicht zwingend Einstieg | Governance wird Umsetzungsarbeit | [Link](https://join.com/companies/digitalimpacts/16160843-consultant-it-governance-risk-und-compliance-technology) |
| JP014 | JL.Digital, Freelance Consultant AI Governance & Regulatory Controls Banking | Finance/Governance | Senior/Freelance | Banking/DACH unklar | EU AI Act, DORA, ISO/IEC 42001, agentische KI-Systeme, Kontrollrahmen | kein Einstieg | Stützt Nachfrage nach AI-Governance, nicht Juniorclaim | [Link](https://join.com/companies/jl/16058712-freelance-consultant-ai-governance-und-regulatory-controls-banking-m-w-d) |
| JP015 | Digital Masters, Senior Programmatic Manager | Media/Programmatic | Senior | Hamburg | DV360, The Trade Desk, DSP, Ad Verification, Tag Management, Tracking, KPI-Setups, Full Funnel | Seniorrolle, kein Juniorbeleg | Mediaarbeit wird datenstack- und plattformnah | [Link](https://digital-masters-gmbh.jobs.personio.de/job/2345423?language=de) |
| JP016 | add2, Senior Programmatic Manager | Media/Programmatic | Senior | Düsseldorf | DV360, The Trade Desk, Brand Safety, Reporting, Optimierung | Seniorrolle | Plattform- und Messkompetenz wird sichtbar | [Link](https://omr.com/de/jobs-hr/jobs/senior-programmatic-manager-m-w-d-add2-gmbh-duesseldorf) |
| JP017 | WPP Media, Programmatic Specialist | Media/Programmatic | unklar | DACH/unklar | Programmatic, Plattformsteuerung, Reporting | Level unklar | Skill-Bündel aus Plattform und Messung sichtbar | [Link](https://job-boards.greenhouse.io/wppmedia/jobs/5096234008) |
| JP018 | zooplus, Paid Social & Display Manager | Marketing/Performance | Mid | DACH/unklar | Paid Social, Display, Plattformen, Tracking, Reporting | Inhouse, kein Designclaim | Marketingrolle liest Plattformleistung | [Link](https://jobs.smartrecruiters.com/ZooplusSE/744000093135562-paid-social-display-manager-all-genders-) |
| JP019 | HQ Sports, Performance Creative Lead | Performance Creative | Lead | remote/DACH | Creative Roadmap, Research, Skripte, Briefings, Creator-Steuerung, Testing | Leadrolle | Creative wird Test- und Produktionssystem | [Link](https://join.com/companies/hq-germanycom/15768112-performance-creative-lead-m-w-d-or-100-remote-or-baue-unsere-winning-ads-maschine-hq-germany) |
| JP020 | Searchperts, Brand & AI Operations Manager | Marketing/Ops | Mid | Düsseldorf | Brand Building, AI-first Prozesse, Automation, Skripte, Performance-Umfeld | kleine Stichprobe | Brand, Operations und KI-Automation verbinden sich | [Link](https://join.com/companies/searchperts/16029776-brand-und-ai-operations-manager-m-w-d) |
| JP021 | JOIN, Senior Brand Designer | Brand Design | Senior | Berlin | Brand System, Growth, Kampagnen, Businessziele, Performance Data Literacy | Seniorrolle, kein AI-Schwerpunkt | Brand Design wird system- und wirkungsnäher | [Link](https://join.com/companies/join/15992438-senior-brand-designer-m-f-d) |
| JP022 | Stronger Marketing, Creator & Content Management | Performance Content | unklar | DACH/unklar | Content Briefings, Creative Strategy, Social Advertising | Level und AI-Anteil unklar | Produktion wird briefing-, creator- und performancegesteuert | [Link](https://join.com/companies/strongermarketing/16080060-creator-und-content-management-vollzeit-m-w-d) |

## Facetten

| Facette | IDs | Lesart |
|---|---|---|
| Junior/Einstieg | JP001, JP002, JP003, JP004, JP005, JP006, JP010, JP011, JP012 | Einstieg ist nicht nur Ausführung. Prototyping, QA, Toolnähe und Nachweisarbeit kommen früh vor. |
| Creative Technology | JP007, JP008, JP009 | Sichtbarkeit ist belegt; Wachstum bleibt offen. |
| Governance/Compliance | JP010, JP011, JP012, JP013, JP014 | Stärker Consulting, Security und Finance als HR oder Operations. |
| Media/Programmatic | JP015, JP016, JP017, JP018 | Plattform- und Messkompetenz ist wiederkehrender Rollenmarker. |
| Performance Creative/Brand Ops | JP019, JP020, JP021, JP022 | Kreativarbeit wird näher an Testing, Growth, Briefing und Systemsteuerung gerückt. |
| Gegenmarker: klassische Grundlagen | JP003, JP008, JP021 | AI erklärt nicht alles; UX, Brand, Portfolio und Interaction bleiben eigene Kompetenzfelder. |

## Corpus-Status

| Kriterium | Stand | Nächste Schwelle |
|---|---|---|
| Designrollen | 9 | 30 Designrollen, Level getrennt |
| Wirtschafts-/Governance-Rollen | 5 | 30 Wirtschaftsrollen, Subfelder getrennt |
| Media-/Marketingrollen | 8 | 20 Media-/Marketingrollen, Agentur/Inhouse/Retail getrennt |
| Junior/Einstieg | 9 | mindestens 20 Einstiegsrollen |
| Arbeitgeberdaten | 5 Quellen | halbjährlich aktualisieren |

## Claim-Auswertung

| Claim | Corpus-Signal | Status |
|---|---|---|
| Juniorrollen verlieren klassische Lernaufgaben. | Besser: klassische Lernaufgaben werden durch QA, Prototyping, Toolnähe und Lieferverantwortung überlagert. | `directional signal` |
| Creative-Technology-Rollen wachsen. | Rollen sind sichtbar, aber Wachstum ist nicht belegt. | `spot-check signal` |
| AI-Governance wird in Wirtschaftseinstiegsrollen sichtbar. | Sichtbar in Consulting, Security, Compliance und Finance-nahen Rollen. | `spot-check signal` |
| Media- und Marketingrollen werden mess- und plattformnäher. | Starkes wiederkehrendes Signal in Programmatic und Performance. | `directional signal` |
| Plattformmetriken verschieben Gestaltungsspielräume. | Rollen verbinden Creative-Arbeit mit Testing, KPI, Growth, Reporting und Plattformsteuerung. | `directional signal` |
