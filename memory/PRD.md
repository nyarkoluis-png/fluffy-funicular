# KFZ-Technik-Dreieich Website PRD

## Original Problem Statement
Moderne, professionelle und verkaufsstarke Website für KFZ-Technik-Dreieich GmbH mit Schwarz/Orange Farbschema.

## User Preferences
- Schwarz/Orange Farbschema (angepasst vom ursprünglichen Gelb)
- Slideshow-Banner mit Werkstattbildern (11 Bilder, kontinuierlich)
- Navbar mit speziellem Logo (abgerundet, exakte Maße)
- Dienstleistungen-Tabelle (8 Blöcke, visuell editierbar)
- Galerie mit 15 echten Werkstattbildern
- Kontaktformular deaktiviert ("Anfrageformular zurzeit nicht verfügbar")
- Visual-Editor-Kompatibilität für alle Texte

## What's Been Implemented

### 12. Juni 2026
- ✅ Galerie vervollständigt mit allen 15 echten Werkstattbildern
  - Klimaservicegerät CAR1
  - Schraubenschlüssel Wandtafel
  - Werkzeugtafel mit Spezialwerkzeug
  - Werkstatt Arbeitsbereich mit Motoröl
  - RP Tools Hebebühne

### Vorherige Implementierungen
- ✅ FastAPI Backend mit /api/contact Endpoint
- ✅ MongoDB Integration für Kontaktformular-Daten
- ✅ Slideshow-Banner mit 11 benutzerdefinierten Bildern
- ✅ Navbar Logo verfeinert (abgerundet, exakte Abmessungen)
- ✅ ServicesTableSection erweitert auf 8 Blöcke
- ✅ Alle Inhalte direkt in JSX für Visual-Editor-Kompatibilität
- ✅ Kontaktformular absichtlich deaktiviert

## Code Architecture
```
/app/
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js
    │   ├── index.css
    │   ├── pages/
    │   │   └── LandingPage.jsx
    │   └── components/
    │       ├── Navbar.jsx
    │       ├── SlideshowBanner.jsx
    │       ├── ServicesTableSection.jsx (8 Blöcke, direkt in JSX)
    │       ├── GallerySection.jsx (15 Bilder, direkt in JSX)
    │       ├── AboutSection.jsx
    │       ├── ReviewsSection.jsx
    │       ├── ContactSection.jsx (Formular deaktiviert)
    │       ├── FAQSection.jsx
    │       └── Footer.jsx
```

## WICHTIG: Visual-Editor-Einschränkung
ServicesTableSection.jsx und GallerySection.jsx haben absichtlich repetitiven Code, weil der Visual-Editor nicht mit `.map()` über Arrays funktioniert. **NICHT in Arrays/Props refaktorisieren**, sonst kann der Benutzer Inhalte nicht visuell bearbeiten.

## Prioritized Backlog
### P0 (Done)
- ✅ Vollständige Landing Page mit Schwarz/Orange Theme
- ✅ Slideshow-Banner (11 Bilder)
- ✅ 8 Dienstleistungsblöcke (Visual-Editor kompatibel)
- ✅ Galerie mit 15 echten Werkstattbildern
- ✅ Kontaktformular deaktiviert

### P1 (Wartend auf Benutzer)
- GMX SMTP E-Mail-Integration für Kontaktformular (Benutzer muss Zugangsdaten bereitstellen)
- 1&1 Domain-Verbindung

### P2 (Zukünftig)
- Admin-Dashboard für Anfragen
- Terminbuchungssystem
- SEO-Optimierung
