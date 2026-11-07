# Fragebogen für Blerta

Ein interaktiver, statischer Fragebogen ohne Backend. Antworten werden automatisch im lokalen Speicher des Browsers gesichert und nicht an einen Server übertragen. Über **Antworten herunterladen** kann Blerta ihre Antworten als JSON-Datei exportieren und selbst weitergeben.

## Lokal ansehen

`index.html` in einem aktuellen Browser öffnen. Für die Vorschau kann auch ein lokaler statischer Webserver verwendet werden.

## Auf GitHub veröffentlichen und mit Vercel hosten

1. Die Dateien dieses Ordners in ein neues GitHub-Repository laden.
2. In Vercel **Add New → Project** wählen und das GitHub-Repository importieren.
3. Kein Framework-Preset und keinen Build-Befehl auswählen; das Projekt ist statisches HTML, CSS und JavaScript.
4. Als Output-Verzeichnis `.` verwenden und **Deploy** auswählen.

Vercel stellt anschließend eine URL bereit und kann weitere Deployments automatisch aus GitHub erstellen.

## Datenschutz

Der Fragebogen verwendet kein Analyse- oder Formular-Backend. Antworten bleiben im Browserprofil, in dem sie eingegeben wurden. Beim Löschen der Browserdaten können sie verloren gehen. Deshalb sollten Antworten regelmäßig heruntergeladen werden. Die Exportdatei kann sensible persönliche Angaben enthalten und sollte nur bewusst weitergegeben werden.
