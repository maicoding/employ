---
title: "Vault Operating System"
type: system
status: ready
created: 2026-05-21
updated: 2026-05-21
tags: [system, workflow, public-safe]
---

# Vault Operating System

## Was hier Karpathy Style heisst

Der Vault ist kein Ablageordner und kein Chat-Protokoll.

Er ist ein dauerhaftes Markdown-Wiki, das mit jeder Quelle besser sortiert wird. Quellen werden nicht nur wiedergefunden. Sie werden in kleine Seiten, Begriffe, Querverweise, offene Fragen und belastbare Überblicke eingearbeitet.

## Drei Schichten

| Schicht | Zweck | Was darf hinein? |
|---|---|---|
| `raw/` | Fundstellen und Rohmaterial | öffentliche Links, eigene Kurznotizen, keine geschützten Volltexte |
| `review/` | Prüfung | Quellenstatus, Gegenchecks, Claim-Register |
| `wiki/` | kompilierte Wissensbasis | Source Cards, Concepts, Syntheses, Packets |

## Denkraum und Belegarchiv

Der Vault darf frühe Gedanken halten. Er darf aber nicht so tun, als wären sie schon Wissen.

| Status | Darf | Darf nicht |
|---|---|---|
| `inbox` | sammeln | als Befund auftreten |
| `scoping` | Begriffe klären | öffentlich behaupten |
| `signal` | Muster zeigen | harte Schluesse tragen |
| `evidence-linked` | interne Synthesen stuetzen | allein als finale Aussage gelten |
| `claim-ready` | öffentlich genutzt werden | ohne Review stehen bleiben |

## Public-Safe-Gate

Eine Aussage ist public-safe, wenn sie diese Fragen besteht:

1. Ist die Quelle öffentlich erreichbar?
2. Ist die Quelle näher am Gegenstand als ein Kommentar darüber?
3. Ist die Zahl oder Beobachtung mit Datum und Kontext markiert?
4. Gibt es einen Gegencheck oder eine Grenze?
5. Wurde nichts Geschütztes kopiert?
6. Ist die Sprache sachlich genug für GitHub Pages?

## Notiztypen

- `source`: Quellenkarte
- `concept`: Begriff oder Denkbaustein
- `synthesis`: Überblick über mehrere Quellen
- `packet`: ein kurzer, wiederverwendbarer Gedanke
- `operation`: Workflow, Suche, Wartung
- `state`: Dashboard oder Entscheidung

## Schreibregel für öffentliche Seiten

Kein Satz soll größer klingen als seine Quellenlage.

Gute Form:

```text
Die Quelle zeigt X für Kontext Y. Für Z reicht sie nicht.
```

Schlechte Form:

```text
KI veraendert alles.
```

## Woechentlicher Wartungslauf

- neue öffentliche Quellen suchen
- veraltete Zahlen markieren
- Links prüfen
- offene Fragen aktualisieren
- geschützte oder interne Verweise entfernen
- Sprache kuerzen
- Index und Log pflegen
