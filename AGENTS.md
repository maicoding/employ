# AGENTS.md

Arbeitsregeln für dieses Karpathy-Style Second-Brain-Wiki.

## Zweck

Dieser Vault sammelt und kompiliert Wissen zum Arbeitsmarkt unter KI-Bedingungen. Er ist allgemein gehalten und hat zwei Vertiefungen:

- Wirtschaft
- Design

Der Vault ist für eine spätere GitHub-Pages-Veröffentlichung vorbereitet. Deshalb gelten strengere Quellenregeln als in einem rein privaten Recherchevault.

## Nicht-Ziele

- keine institutionellen Altbezüge
- keine Paywall-Zusammenfassungen als tragende Quelle
- keine kopierten Pressespiegel
- keine geschützten Volltexte
- keine langen Zitate
- keine KI-Sprache mit großen Gesten, Adjektivketten oder künstlichen Gegensätzen
- keine Toolhype-Seiten ohne Arbeitsmarktbezug

## Grundsatz

Der Vault ist Denkraum und Belegarchiv.

Frühe Gedanken dürfen hinein. Sie müssen aber als früh markiert bleiben. Öffentliche Aussagen brauchen öffentliche Quellen, klare Grenzen und eine nachvollziehbare Verbindung zu den Quellen.

Arbeitsformel:

```text
Raw sammeln.
Wiki kompilieren.
Widerspruch markieren.
Quellen prüfen.
Nur saubere Aussagen veröffentlichen.
```

## Schichten

### Raw

`raw/` enthält Fundstellen, Links, Notizen und Material, das noch nicht ausgewertet ist.

Regeln:

- Bestehende Raw-Dateien nicht umschreiben.
- Keine geschützten Volltexte ablegen.
- Keine kopierten Artikel aus Paywalls oder Pressedatenbanken ablegen.
- Bei Webquellen lieber URL plus kurze eigene Notiz speichern.

### Review

`review/` enthält Quellenprüfung, Gegenchecks, Claim-Register und offene Fragen.

Hier wird entschieden:

- Was ist nur Signal?
- Was ist brauchbarer Beleg?
- Was ist öffentlich nutzbar?
- Was ist veraltet oder zu schwach?

### Wiki

`wiki/` ist die kompilierte Wissensschicht.

- `wiki/sources/`: eine Seite pro öffentlich nutzbarer Quelle
- `wiki/concepts/`: Begriffe und wiederverwendbare Denkbausteine
- `wiki/syntheses/`: Überblicke und Verdichtungen
- `wiki/packets/`: kurze Merksätze mit Grenze und Gegencheck
- `wiki/operations/`: Suchlogik, Wartung, offene Fragen
- `wiki/state/`: Dashboard, Entscheidungen, Lessons

### Thematische Einstiege

- `01_Arbeitsmarkt/`
- `02_Wirtschaft/`
- `03_Design/`
- `04_Portfolio/`
- `05_Playbooks/`

Diese Ordner sind lesbare Einstiege für Menschen. Sie dürfen auf Wiki-Seiten verlinken.

### Outputs

`outputs/` enthält Briefings, Webseiten-Export, Slides oder spätere GitHub-Pages-Artefakte. Outputs sind nicht Quelle der Wahrheit.

## Statuswerte

- `inbox`: Fund oder Notiz, ungeprüft
- `scoping`: Thema wird abgegrenzt
- `signal`: Muster oder Beobachtung, noch nicht als Befund nutzen
- `candidate-source`: Quelle sieht relevant aus, ist aber noch nicht geprüft
- `evidence-linked`: Aussage ist mit Quelle verbunden, aber noch nicht öffentlich hart
- `claim-ready`: öffentlich nutzbar, wenn Quellenlage und Gegencheck passen
- `contested`: plausibel, aber mit offenem Widerspruch
- `rejected`: bewusst nicht als Stützung verwenden

## Public-Safe-Regel

Eine Seite ist public-safe, wenn:

- jede zentrale Zahl eine öffentliche Quelle hat
- die Quelle direkt verlinkt ist
- keine geschützten Passagen übernommen wurden
- Zitate kurz bleiben oder vermieden werden
- Unsicherheit sichtbar ist
- keine internen Namen, Kundendaten oder Hochschulbezuge enthalten sind

## Schreibstil

Deutsch, klar, knapp.

Bevorzugt:

- "Kernaussage" statt akademischer Schlagwortlogik
- "Warum es zählt" statt "Relevanzdimension"
- "Grenze" statt "Limitationsdiskurs"
- "Gegencheck" statt künstlicher Gegensaetze
- konkrete Tätigkeiten statt Buzzwords
- Verben statt Adjektivketten

Vermeiden:

- "transformativ", wenn nicht genau gesagt wird, was sich verändert
- "disruptiv", wenn kein Mechanismus genannt wird
- "holistisch", "zukunftsfähig", "innovativ" als Füllwörter
- Toollisten ohne Arbeitsprozess
- allgemeine KI-Formeln ohne Branchenbezug

## Ingest Workflow

1. Quelle in `raw/inbox/` oder direkt als Link erfassen.
2. Prüfen: öffentlich, stabil, zitierbar?
3. Source Card in `wiki/sources/` anlegen.
4. Relevante Konzepte aktualisieren.
5. Wenn mehrere Quellen zusammenpassen: Synthese aktualisieren.
6. `wiki/index.md` und `wiki/log.md` aktualisieren.
7. Offene Fragen in `wiki/operations/open-questions.md` notieren.

## Query Workflow

1. Zuerst `wiki/index.md` lesen.
2. Relevante Source-, Concept- und Synthesis-Seiten öffnen.
3. Antwort mit Quellenbezug und Grenzen formulieren.
4. Wenn die Antwort dauerhaft nützlich ist, als neue Seite ablegen.
5. Index und Log aktualisieren.

## Lint Workflow

Regelmäßig prüfen:

- Quellen ohne URL
- Seiten ohne Status
- Aussagen ohne Quelle
- interne Links auf institutionelle Alt- oder geschützte Archive
- zu werbliche Sprache
- veraltete Marktannahmen
- Konzepte ohne Gegencheck
- Synthesen, die nur aus Signalen bestehen
