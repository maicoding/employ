# AGENTS.md

Arbeitsregeln fuer dieses Karpathy-Style Second-Brain-Wiki.

## Zweck

Dieser Vault sammelt und kompiliert Wissen zum Arbeitsmarkt unter KI-Bedingungen. Er ist allgemein gehalten und hat zwei Vertiefungen:

- Wirtschaft
- Design

Der Vault ist fuer eine spaetere GitHub-Pages-Veroeffentlichung vorbereitet. Deshalb gelten strengere Quellenregeln als in einem rein privaten Recherchevault.

## Nicht-Ziele

- keine institutionellen Alt-Bezuege
- keine Paywall-Zusammenfassungen als tragende Quelle
- keine kopierten Pressespiegel
- keine geschuetzten Volltexte
- keine langen Zitate
- keine KI-Sprache mit grossen Gesten, Adjektivketten oder kuenstlichen Gegensaetzen
- keine Toolhype-Seiten ohne Arbeitsmarktbezug

## Grundsatz

Der Vault ist Denkraum und Belegarchiv.

Fruehe Gedanken duerfen hinein. Sie muessen aber als frueh markiert bleiben. Oeffentliche Aussagen brauchen oeffentliche Quellen, klare Grenzen und eine nachvollziehbare Verbindung zu den Quellen.

Arbeitsformel:

```text
Raw sammeln.
Wiki kompilieren.
Widerspruch markieren.
Quellen pruefen.
Nur saubere Aussagen veroeffentlichen.
```

## Schichten

### Raw

`raw/` enthaelt Fundstellen, Links, Notizen und Material, das noch nicht ausgewertet ist.

Regeln:

- Bestehende Raw-Dateien nicht umschreiben.
- Keine geschuetzten Volltexte ablegen.
- Keine kopierten Artikel aus Paywalls oder Pressedatenbanken ablegen.
- Bei Webquellen lieber URL plus kurze eigene Notiz speichern.

### Review

`review/` enthaelt Quellenpruefung, Gegenchecks, Claim-Register und offene Fragen.

Hier wird entschieden:

- Was ist nur Signal?
- Was ist brauchbarer Beleg?
- Was ist oeffentlich nutzbar?
- Was ist veraltet oder zu schwach?

### Wiki

`wiki/` ist die kompilierte Wissensschicht.

- `wiki/sources/`: eine Seite pro oeffentlich nutzbarer Quelle
- `wiki/concepts/`: Begriffe und wiederverwendbare Denkbausteine
- `wiki/syntheses/`: Ueberblicke und Verdichtungen
- `wiki/packets/`: kurze Merksaetze mit Grenze und Gegencheck
- `wiki/operations/`: Suchlogik, Wartung, offene Fragen
- `wiki/state/`: Dashboard, Entscheidungen, Lessons

### Thematische Einstiege

- `01_Arbeitsmarkt/`
- `02_Wirtschaft/`
- `03_Design/`
- `04_Portfolio/`
- `05_Playbooks/`

Diese Ordner sind lesbare Einstiege fuer Menschen. Sie duerfen auf Wiki-Seiten verlinken.

### Outputs

`outputs/` enthaelt Briefings, Webseiten-Export, Slides oder spaetere GitHub-Pages-Artefakte. Outputs sind nicht Quelle der Wahrheit.

## Statuswerte

- `inbox`: Fund oder Notiz, ungeprueft
- `scoping`: Thema wird abgegrenzt
- `signal`: Muster oder Beobachtung, noch nicht als Befund nutzen
- `candidate-source`: Quelle sieht relevant aus, ist aber noch nicht geprueft
- `evidence-linked`: Aussage ist mit Quelle verbunden, aber noch nicht oeffentlich hart
- `claim-ready`: oeffentlich nutzbar, wenn Quellenlage und Gegencheck passen
- `contested`: plausibel, aber mit offenem Widerspruch
- `rejected`: bewusst nicht als Stuetzung verwenden

## Public-Safe-Regel

Eine Seite ist public-safe, wenn:

- jede zentrale Zahl eine oeffentliche Quelle hat
- die Quelle direkt verlinkt ist
- keine geschuetzten Passagen uebernommen wurden
- Zitate kurz bleiben oder vermieden werden
- Unsicherheit sichtbar ist
- keine internen Namen, Kundendaten oder Hochschulbezuge enthalten sind

## Schreibstil

Deutsch, klar, knapp.

Bevorzugt:

- "Kernaussage" statt akademischer Schlagwortlogik
- "Warum es zaehlt" statt "Relevanzdimension"
- "Grenze" statt "Limitationsdiskurs"
- "Gegencheck" statt kuenstlicher Gegensaetze
- konkrete Taetigkeiten statt Buzzwords
- Verben statt Adjektivketten

Vermeiden:

- "transformativ", wenn nicht genau gesagt wird, was sich veraendert
- "disruptiv", wenn kein Mechanismus genannt wird
- "holistisch", "zukunftsfaehig", "innovativ" als Fuellwoerter
- Toollisten ohne Arbeitsprozess
- allgemeine KI-Formeln ohne Branchenbezug

## Ingest Workflow

1. Quelle in `raw/inbox/` oder direkt als Link erfassen.
2. Pruefen: oeffentlich, stabil, zitierbar?
3. Source Card in `wiki/sources/` anlegen.
4. Relevante Konzepte aktualisieren.
5. Wenn mehrere Quellen zusammenpassen: Synthese aktualisieren.
6. `wiki/index.md` und `wiki/log.md` aktualisieren.
7. Offene Fragen in `wiki/operations/open-questions.md` notieren.

## Query Workflow

1. Zuerst `wiki/index.md` lesen.
2. Relevante Source-, Concept- und Synthesis-Seiten oeffnen.
3. Antwort mit Quellenbezug und Grenzen formulieren.
4. Wenn die Antwort dauerhaft nuetzlich ist, als neue Seite ablegen.
5. Index und Log aktualisieren.

## Lint Workflow

Regelmaessig pruefen:

- Quellen ohne URL
- Seiten ohne Status
- Aussagen ohne Quelle
- interne Links auf institutionelle Alt- oder geschuetzte Archive
- zu werbliche Sprache
- veraltete Marktannahmen
- Konzepte ohne Gegencheck
- Synthesen, die nur aus Signalen bestehen
