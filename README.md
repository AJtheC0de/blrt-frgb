# Fragebogen für Blerta

Ein interaktiver, statischer Fragebogen. Antworten werden automatisch im lokalen Speicher des Browsers gesichert; Werkfotos bleiben in IndexedDB auf demselben Gerät. Blerta kann Antworten als JSON-Datei herunterladen oder den Fragebogen samt ausgewählten Werkfotos per FormSubmit an `ajnunidriton@gmail.com` senden.

## Lokal ansehen

`index.html` in einem aktuellen Browser öffnen. Für die Vorschau kann auch ein lokaler statischer Webserver verwendet werden.

## Auf GitHub veröffentlichen und mit Vercel hosten

1. Die Dateien dieses Ordners in ein neues GitHub-Repository laden.
2. In Vercel **Add New → Project** wählen und das GitHub-Repository importieren.
3. Kein Framework-Preset und keinen Build-Befehl auswählen; das Projekt ist statisches HTML, CSS und JavaScript.
4. Als Output-Verzeichnis `.` verwenden und **Deploy** auswählen.

Vercel stellt anschließend eine URL bereit und kann weitere Deployments automatisch aus GitHub erstellen.

## E-Mail-Versand

Der Versand verwendet [FormSubmit](https://formsubmit.co/), damit kein eigener Server oder API-Schlüssel erforderlich ist. Die Antworten bleiben bis zum ausdrücklichen Absenden im Browser. Beim Löschen der Browserdaten können Antworten und gespeicherte Bilder verloren gehen. Die Fotoauswahl wird nicht in den JSON-Export eingebettet.

Beim ersten Versand schickt FormSubmit eine Aktivierungsnachricht an `ajnunidriton@gmail.com`. Der Empfänger muss die Adresse über diesen Link bestätigen. Danach gehen weitere Einsendungen an diese Adresse. Werkfotos werden als E-Mail-Anhänge übertragen. FormSubmit begrenzt die Gesamtgröße der Anhänge auf 10 MB pro Einsendung; größere Bildmengen müssen auf mehrere Einsendungen verteilt werden. Da der aktuelle Endpunkt im öffentlichen JavaScript steht, sollte nach der Aktivierung ein zufälliger, nicht die E-Mail-Adresse enthaltender FormSubmit-Endpunkt eingerichtet und `SUBMISSION_ENDPOINT` in `app.js` entsprechend ersetzt werden.
