# Child Theme für Fouad Vollmer & Gut Basis Theme

Das **Volage Child Theme** erweitert das [Fouad Vollmer & Gut Basis Theme](https://github.com/fouadvollmergut/base_theme) und dient als projektspezifische Anpassung. Alle Funktionen, Templates und Styles bauen auf dem Basis-Theme auf und werden hier individuell erweitert oder überschrieben.

---

## Features

* Individuelles Design und Layout für Volage
* Erweiterung der modularen Strukturen aus dem Basis-Theme
* Optimiert für Mehrsprachigkeit via Polylang
* Saubere Trennung zwischen Basis und Projekt-spezifischem Code

---

## Voraussetzungen

* [Fouad Vollmer & Gut Basis Theme](https://github.com/fouadvollmergut/base_theme)

---

## Installation

1. Repository klonen oder ZIP herunterladen:

```bash
git clone https://github.com/fouadvollmergut/base_theme_child.git
```

2. Ordner in `wp-content/themes/` legen.
3. Sicherstellen, dass das **Basis Theme** installiert und aktiv ist.
4. Im WordPress-Backend aktivieren (**Design > Themes**).

---

## Anpassungen

* **style.css** enthält die Theme-Informationen und lädt die Styles des Basis-Themes.
* **functions.php** erweitert Funktionen oder bindet zusätzliche Ressourcen ein.
* Eigene Templates können durch Überschreiben der Basis-Dateien hinzugefügt werden.
* `.github/workflows/deploy.yaml` enthält eine Vorlage für das automatisierte Deployment mit 1Password und SSH

### Beispiel: `style.css`

```css
/*
 Theme Name:   Child Theme Name
 Template:     base_theme
 Description:  Child Theme für Fouad Vollmer & Gut Basis Theme
 Version:      1.0.0
 Author:       Fouad Vollmer & Gut Werbeagentur GbR
*/
```

---

## Best Practices

* Änderungen immer im Child Theme vornehmen, nicht im Basis-Theme.
* Eigene Funktionen sauber dokumentieren.
* Template-Overrides im README dokumentieren.
* Basis-Theme regelmäßig updaten und Child Theme auf Kompatibilität prüfen.

---

## Lizenz

Dieses Child Theme ist lizenziert unter der [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
