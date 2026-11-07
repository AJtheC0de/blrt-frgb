const STORAGE_KEY = "blerta-questionnaire-v1";
const SUBMISSION_ENDPOINT = "https://formsubmit.co/ajax/ajnunidriton@gmail.com";

const artworkFields = [
  { key: "title", label: "Titel (oder „ohne Titel“)", type: "text" },
  { key: "year", label: "Entstehungsjahr", type: "text" },
  { key: "medium", label: "Technik / Material (z. B. Acryl auf Leinwand)", type: "text" },
  { key: "size", label: "Größe in cm (Breite × Höhe)", type: "text" },
  { key: "framed", label: "Gerahmt?", type: "radio", options: ["Ja", "Nein"] },
  { key: "status", label: "Status", type: "radio", options: ["Verfügbar", "Verkauft", "Privatbesitz", "Nicht verkäuflich"] },
  { key: "showPrice", label: "Preis anzeigen?", type: "radio", options: ["Ja", "Nein", "Auf Anfrage"] },
  { key: "price", label: "Preis, falls ja", type: "text" },
  { key: "story", label: "Was bedeutet dir dieses Bild? Wie ist es entstanden? (2–3 Sätze)", type: "textarea", full: true },
  { key: "featured", label: "Darf es in der großen Ausstellung auf der Startseite erscheinen?", type: "radio", options: ["Ja", "Nein"], full: true },
];

const sections = [
  {
    title: "Über dich",
    description: "Diese Angaben helfen uns, den Abschnitt „Meet the artist“ in deinen Worten zu schreiben.",
    questions: [
      { key: "displayName", label: "Wie soll dein Name auf der Website stehen? (nur „Blerta“, Vor- und Nachname, ein Künstlername?)", type: "text" },
      { key: "description", label: "Wie würdest du dich selbst in einem Satz beschreiben? (z. B. „Malerin“, „Künstlerin“, „Kalligrafin“)", type: "text" },
      { key: "location", label: "Woher kommst du, und wo lebst du heute? Darf das auf die Website?", type: "textarea" },
      { key: "paintingSince", label: "Seit wann malst du?", type: "text" },
      { key: "artBeginning", label: "Wie bist du zur Kunst gekommen? Gab es einen bestimmten Moment oder Menschen?", type: "textarea" },
      { key: "education", label: "Hast du eine Ausbildung, Kurse oder hast du dir alles selbst beigebracht?", type: "textarea" },
      { key: "exhibitions", label: "Gab es Ausstellungen, Verkäufe, Aufträge oder Presse, die wir erwähnen dürfen?", type: "textarea" },
      { key: "threeWords", label: "Gibt es drei Worte, die dich als Künstlerin beschreiben?", type: "text" },
      { key: "beyondInstagram", label: "Gibt es etwas, das Menschen über dich wissen sollten, das man auf Instagram nicht sieht?", type: "textarea" },
    ],
  },
  {
    title: "Deine Kunst",
    description: "Hier geht es darum, wie und warum du malst.",
    questions: [
      { key: "style", label: "Wie würdest du deinen Stil beschreiben?", type: "textarea" },
      { key: "materials", label: "Mit welchen Farben und Materialien arbeitest du? (z. B. Acryl, Öl, Strukturpaste, Spachtel, Sand)", type: "textarea" },
      { key: "techniques", label: "Welche Techniken benutzt du? (z. B. Impasto, Spachteltechnik, Schichten)", type: "textarea" },
      { key: "themes", label: "Welche Themen sind dir wichtig?", type: "textarea" },
      { key: "inspiration", label: "Was oder wer inspiriert dich? (Natur, Glaube, Musik, andere Künstler, deine Herkunft …)", type: "textarea" },
      { key: "process", label: "Wie entsteht ein Bild bei dir – planst du vorher, oder entsteht es beim Malen?", type: "textarea" },
      { key: "time", label: "Wie lange arbeitest du ungefähr an einem Bild?", type: "text" },
      { key: "workspace", label: "Wo malst du? (zu Hause, im Atelier …) Darf man das zeigen?", type: "textarea" },
      { key: "feeling", label: "Was möchtest du, dass Menschen fühlen, wenn sie deine Bilder sehen?", type: "textarea" },
      { key: "proudOf", label: "Gibt es ein Bild, auf das du besonders stolz bist? Warum?", type: "textarea" },
    ],
  },
  {
    title: "Deine Werke",
    description: "Drei deiner Bilder sind schon auf der Website, aber ohne Titel und Details. Bitte ergänze, was du weißt – wir erfinden nichts. Du kannst weitere Bilder ergänzen.",
    callout: "Für jedes Bild kannst du einfach die Angaben ausfüllen, die du weißt. Leere Felder sind völlig in Ordnung.",
    type: "artworks",
  },
  {
    title: "Glaube & Kalligrafie",
    description: "Die Website hat einen ruhigen Abschnitt über deinen Glauben, mit deiner Kalligrafie im Mittelpunkt. Wir möchten ihn so gestalten, wie es sich für dich richtig anfühlt.",
    questions: [
      { key: "faithVisibility", label: "Möchtest du, dass dein Glaube auf der Website sichtbar ist?", type: "radio", options: ["Ja", "Nur zurückhaltend", "Lieber nicht"] },
      { key: "calligraphyMeaning", label: "Was bedeutet dir die Kalligrafie, die du malst?", type: "textarea" },
      { key: "faithWords", label: "Was möchtest du über deinen Glauben sagen – in deinen eigenen Worten?", type: "textarea" },
      { key: "verseCheck", label: "Auf der Website steht der Vers „And He is with you wherever you are.“ (Qur’an 57:4). Ist das der Vers aus deiner Instagram-Bio, und stimmt der Wortlaut?", type: "textarea" },
      { key: "verseArabic", label: "Soll der Vers auch auf Arabisch erscheinen? Wenn ja, bitte schreib ihn hier genau so, wie du ihn möchtest.", type: "textarea" },
      { key: "verseLanguage", label: "Soll der Vers auf Deutsch, Englisch oder beidem stehen?", type: "radio", options: ["Deutsch", "Englisch", "Beidem"] },
      { key: "religiousBoundaries", label: "Gibt es etwas, das bei der Darstellung von Kalligrafie oder religiösen Inhalten auf keinen Fall passieren soll?", type: "textarea" },
    ],
    calloutAfter: "Unser Versprechen: Die Kalligrafie wird nie zerschnitten, verzerrt oder animiert. Sie erscheint immer vollständig und ruhig.",
  },
  {
    title: "Deine Geschichte & Gesundheit",
    description: "Die Website zeigt dich als Künstlerin – nicht als Krankheit. Ob und wie viel du über deine Gesundheit erzählst, entscheidest allein du. „Lieber nicht“ ist eine völlig gute Antwort.",
    type: "health",
    questions: [
      { key: "artInDailyLife", label: "Wenn du möchtest: Was gibt dir die Kunst im Alltag?", type: "textarea" },
      { key: "healthImpact", label: "Wenn du möchtest: Wie hat sich deine Art zu malen verändert?", type: "textarea" },
      { key: "healthWording", label: "Gibt es Wörter oder Formulierungen, die wir auf keinen Fall benutzen sollen? (z. B. „leiden“, „tapfer“, „trotz“)", type: "textarea" },
      { key: "inHerWords", label: "Möchtest du einen kurzen Text in deinen eigenen Worten für den Abschnitt „In her words“ schreiben? Gern hier.", type: "textarea" },
    ],
  },
  {
    title: "Fotos & Material",
    description: "Gute Fotos machen den größten Unterschied. Ein aktuelles Handy reicht völlig. Bitte schick die Fotos als Datei im Original (z. B. per E-Mail oder Google Drive), nicht über WhatsApp – dort werden sie verkleinert.",
    type: "photos",
    questions: [
      { key: "existingPhotos", label: "Die zwei Fotos von dir, die wir schon verwenden (du neben dem roten Bild, die Kalligrafie im Gebetsraum) – dürfen sie auf der Website bleiben?", type: "radio", options: ["Ja", "Nein", "Mit Änderungen"] },
      { key: "excludedPhotos", label: "Gibt es Fotos von dir, die auf keinen Fall gezeigt werden sollen?", type: "textarea" },
      { key: "photographer", label: "Wer hat die Fotos gemacht? Sollen wir jemanden als Fotograf nennen?", type: "textarea" },
    ],
  },
  {
    title: "Verkauf, Aufträge & Kontakt",
    description: "Die Website kann Besuchern helfen, mit dir in Kontakt zu kommen. Kreuz an, was für dich passt.",
    questions: [
      { key: "offerings", label: "Was möchtest du anbieten?", type: "checkbox", options: ["Anfragen zum Kauf von Bildern", "Auftragsarbeiten (Bilder nach Wunsch, z. B. Kalligrafie mit einem Namen)", "Drucke / Poster meiner Bilder", "Anfragen für Ausstellungen oder Kooperationen", "Erstmal nur Instagram folgen und Hallo sagen"] },
      { key: "contactEmail", label: "An welche E-Mail-Adresse sollen Nachrichten aus dem Kontaktformular gehen? (Sie wird nicht öffentlich angezeigt.)", type: "email" },
      { key: "publicEmail", label: "Soll die E-Mail-Adresse auch sichtbar auf der Website stehen?", type: "radio", options: ["Ja", "Nein"] },
      { key: "socialChannels", label: "Ist Instagram (@blerta_a) weiterhin der beste Weg, dich zu erreichen? Gibt es weitere Kanäle?", type: "textarea" },
      { key: "shipping", label: "Versendest du Bilder? Wenn ja, wohin (nur Deutschland, EU, weltweit)?", type: "textarea" },
    ],
  },
  {
    title: "Texte auf der Website",
    description: "Diese Texte haben wir vorläufig geschrieben. Wähl bei jedem aus, ob er so passt, und schreib Änderungen in das Textfeld.",
    type: "copyReview",
  },
  {
    title: "Deine Wünsche zur Website",
    description: "Zum Schluss: Was wünschst du dir für deine Website?",
    questions: [
      { key: "siteLanguage", label: "In welcher Sprache soll die Website sein?", type: "checkbox", options: ["Englisch", "Deutsch", "Albanisch", "Mehrere Sprachen"] },
      { key: "siteFeedback", label: "Wie gefällt dir die Website bisher? Was magst du, was nicht?", type: "textarea" },
      { key: "mood", label: "Gibt es Farben, Stimmungen oder andere Websites, die dir gefallen?", type: "textarea" },
      { key: "missing", label: "Gibt es etwas, das auf der Website fehlt?", type: "textarea" },
      { key: "remove", label: "Gibt es etwas, das du entfernen möchtest?", type: "textarea" },
      { key: "domain", label: "Hast du einen Wunsch für die Internetadresse? (z. B. blerta-art.com)", type: "text" },
      { key: "reference", label: "Darf SIXAM die Website als Referenz zeigen?", type: "radio", options: ["Ja", "Nein", "Bitte vorher fragen"] },
      { key: "anythingElse", label: "Sonst noch etwas, das du uns sagen möchtest?", type: "textarea" },
    ],
    consent: true,
  },
];

const existingArtworks = [
  "Abstraktes Bild (Blau, Flieder, Pfirsich)",
  "Kalligrafie „Allah“ (Violett)",
  "Rotes Bild mit Doppeladler",
];
const copyRows = [
  ["Startseite, Überschrift", "„Art beyond words.“"],
  ["Startseite, Untertitel", "„A world of colour, creativity and faith.“"],
  ["Über dich, Kurzbiografie", "„Blerta is a visual artist whose work explores colour, expression and meaning. Through abstract painting and calligraphy, she creates pieces that reflect her artistic perspective and the values close to her heart.“"],
  ["Glaube, Text", "„Through life’s challenges, faith remains an important part of Blerta’s journey.“"],
  ["Glaube, Vers", "„And He is with you wherever you are.“ – Qur’an 57:4"],
  ["Schluss", "„Art is a part of her story. And the story continues.“"],
  ["Beschreibung abstraktes Bild", "„A large abstract composition of soft blue, lilac, peach and cream, built up in layered, sculpted brushwork.“"],
  ["Beschreibung Kalligrafie", "„The name of Allah in Arabic calligraphy, painted in white over a deep violet, richly textured ground.“"],
  ["Beschreibung rotes Bild", "„A deep red, textured canvas with a black double-headed eagle at its centre.“"],
];

const nav = document.querySelector("#section-nav");
const content = document.querySelector("#section-content");
const progressBar = document.querySelector("#progress-bar");
const progressFill = document.querySelector("#progress-fill");
const progressValue = document.querySelector("#progress-value");
const progressCaption = document.querySelector("#progress-caption");
const warning = document.querySelector("#storage-warning");
const saveStatus = document.querySelector("#save-status");
const saveIndicator = document.querySelector("#save-indicator");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const closingNote = document.querySelector("#closing-note");
const toast = document.querySelector("#toast");

let state = { answers: {}, extraArtworks: 0, currentSection: 0 };
let toastTimeout;

function showStorageWarning(message) {
  warning.textContent = message;
  warning.hidden = false;
  saveStatus.textContent = "Speichern nicht verfügbar";
}

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed && typeof parsed === "object" && parsed.answers && typeof parsed.answers === "object") {
      state = {
        answers: parsed.answers,
        extraArtworks: Number.isInteger(parsed.extraArtworks) && parsed.extraArtworks >= 0 ? Math.min(parsed.extraArtworks, 12) : 0,
        currentSection: Number.isInteger(parsed.currentSection) ? Math.min(Math.max(parsed.currentSection, 0), sections.length - 1) : 0,
      };
    } else {
      showStorageWarning("Gespeicherte Antworten konnten nicht gelesen werden. Du kannst den Fragebogen trotzdem ausfüllen und deine Antworten herunterladen.");
    }
  }
} catch (error) {
  showStorageWarning("Der Browser kann gespeicherte Antworten nicht lesen. Du kannst den Fragebogen trotzdem ausfüllen und deine Antworten herunterladen.");
  console.error("Fragebogen-Antworten konnten nicht geladen werden.", error);
}

delete state.answers.commissionDetails;
delete state.answers.donations;

function saveState() {
  saveIndicator.classList.add("is-saving");
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    saveStatus.textContent = "Nur auf diesem Gerät gespeichert";
    if (!warning.hidden) warning.hidden = true;
  } catch (error) {
    showStorageWarning("Automatisches Speichern ist in diesem Browser nicht verfügbar. Lade deine Antworten regelmäßig herunter, damit nichts verloren geht.");
    console.error("Fragebogen-Antworten konnten nicht gespeichert werden.", error);
  } finally {
    window.setTimeout(() => saveIndicator.classList.remove("is-saving"), 500);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function getValue(key) {
  return state.answers[key];
}

function renderControl(question, key, options = {}) {
  const value = getValue(key);
  const id = `field-${key.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  const label = `<label class="question-label" for="${id}">${escapeHtml(question.label)}${question.help ? `<span class="question-help">${escapeHtml(question.help)}</span>` : ""}</label>`;

  if (question.type === "radio" || question.type === "checkbox") {
    const type = question.type;
    const checkedValues = type === "checkbox" && Array.isArray(value) ? value : [];
    return `<fieldset class="question ${options.full ? "full-width" : ""}"><legend class="question-label">${escapeHtml(question.label)}</legend><div class="choice-list ${options.stacked ? "stacked" : ""}">${question.options.map((option, index) => {
      const choiceId = `${id}-${index}`;
      const checked = type === "radio" ? value === option : checkedValues.includes(option);
      return `<label class="choice" for="${choiceId}"><input id="${choiceId}" type="${type}" name="${id}" value="${escapeHtml(option)}" data-answer="${escapeHtml(key)}"${checked ? " checked" : ""}><span>${escapeHtml(option)}</span></label>`;
    }).join("")}</div></fieldset>`;
  }

  if (question.type === "textarea") {
    return `<div class="question ${options.full ? "full-width" : ""}">${label}<textarea class="control" id="${id}" data-answer="${escapeHtml(key)}" placeholder="Deine Antwort …">${escapeHtml(value || "")}</textarea></div>`;
  }

  return `<div class="question ${options.full ? "full-width" : ""}">${label}<input class="control ${options.short ? "short-answer" : ""}" id="${id}" type="${question.type || "text"}" data-answer="${escapeHtml(key)}" value="${escapeHtml(value || "")}" placeholder="Deine Antwort …" autocomplete="off"></div>`;
}

function renderQuestionList(questions, prefix = "") {
  return `<div class="question-list">${questions.map((question) => renderControl(question, prefix + question.key)).join("")}</div>`;
}

function renderArtworks() {
  const titles = [...existingArtworks, "Weiteres Bild", ...Array.from({ length: state.extraArtworks }, (_, i) => `Weiteres Bild ${i + 2}`)];
  const cards = titles.map((title, index) => {
    const key = `artwork-${index}`;
    const titleQuestion = { key: "title", label: "Titel", type: "text" };
    const fields = artworkFields.filter((field) => field.key !== "title").map((field) => renderControl(field, `${key}-${field.key}`, { full: field.full })).join("");
    const headline = index < 3 ? title : (index === 3 ? "Weiteres Bild" : `Weiteres Bild ${index - 2}`);
    return `<section class="artwork-block" aria-labelledby="${key}-heading"><div class="artwork-heading"><span class="artwork-number">BILD ${String(index + 1).padStart(2, "0")}</span><h3 id="${key}-heading">${escapeHtml(headline)}</h3></div>${index < 3 ? `<p class="question-help">${escapeHtml(title)}</p>` : ""}<div class="artwork-fields">${renderControl(titleQuestion, `${key}-title`)}${fields}</div></section>`;
  }).join("");
  return `${cards}<button class="add-artwork" type="button" id="add-artwork">＋ Weiteres Bild hinzufügen</button>`;
}

function renderPhotoChecklist() {
  const items = [
    "Jedes Bild einzeln, frontal fotografiert, ohne Rahmen im Bild",
    "Jedes Bild mit Rahmen bzw. an der Wand",
    "Nahaufnahmen der Oberfläche (Pinselstriche, Struktur)",
    "Ein Porträtfoto von dir",
    "Du beim Malen",
    "Dein Arbeitsplatz / Atelier",
    "Du mit einem fertigen Bild",
    "Fotos von Ausstellungen oder Präsentationen",
  ];
  return `<div class="question"><p class="question-label">Welche Fotos kannst du uns schicken?</p><div class="choice-list stacked">${items.map((item, index) => {
    const key = `photo-check-${index}`;
    return `<label class="choice" for="${key}"><input id="${key}" type="checkbox" data-answer="${key}"${getValue(key) ? " checked" : ""}><span>${escapeHtml(item)}</span></label>`;
  }).join("")}</div><p class="question-help">Tipps für die Bildfotos: Tageslicht am Fenster, kein Blitz, das Bild gerade von vorne, kein Filter. Am besten mehrere Fotos pro Bild.</p></div>`;
}

function renderHealthConsent() {
  const options = [
    "Gar nichts zu meiner Gesundheit",
    "Nur allgemein, dass ich mit gesundheitlichen Herausforderungen lebe",
    "Der Name meiner Erkrankung (kraniozervikale Instabilität)",
    "Wie meine Gesundheit meine Art zu malen beeinflusst",
    "Fotos, auf denen man z. B. eine Halskrause oder Stütze sieht",
  ];
  return `<div class="question"><fieldset><legend class="question-label">Was davon darf auf der Website erwähnt werden?</legend><div class="choice-list stacked">${options.map((option, index) => {
    const key = `health-permission-${index}`;
    return `<label class="choice" for="${key}"><input id="${key}" type="checkbox" data-answer="${key}"${getValue(key) ? " checked" : ""}><span>${escapeHtml(option)}</span></label>`;
  }).join("")}</div><span class="question-help">Du kannst mehrere auswählen oder alles leer lassen. Deine Gesundheit wird nur mit deiner ausdrücklichen Freigabe erwähnt.</span></fieldset></div>`;
}

function renderCopyReview() {
  return `<div class="question-list">${copyRows.map(([location, text], index) => {
    const key = `copy-${index}`;
    return `<section class="copy-review"><p class="copy-location">${escapeHtml(location)}</p><blockquote>${escapeHtml(text)}</blockquote>${renderControl({ key: "approval", label: "Freigabe", type: "radio", options: ["Passt so", "Bitte ändern", "Lieber nicht verwenden"] }, `${key}-approval`)}${renderControl({ key: "change", label: "Deine Änderung", type: "textarea" }, `${key}-change`)}</section>`;
  }).join("")}</div>`;
}

function renderConsent() {
  const consent = getValue("consent-agreement");
  const deliveryConsent = getValue("consent-email-delivery");
  return `<section class="consent-box"><h3>Einverständnis</h3><label class="consent-choice" for="consent-agreement"><input id="consent-agreement" type="checkbox" data-answer="consent-agreement"${consent ? " checked" : ""}><span>Ich bin damit einverstanden, dass meine Angaben für meine Website verwendet werden.</span></label><p class="consent-reminder">Ich möchte jeden Text sehen und freigeben, bevor er online geht.</p><div class="consent-fields">${renderControl({ key: "consentName", label: "Name", type: "text" }, "consent-name")}${renderControl({ key: "consentDate", label: "Datum", type: "text" }, "consent-date")}</div><div class="delivery-box"><p>Wenn du absendest, werden deine Antworten einschließlich eventuell eingetragener Gesundheitsangaben über FormSubmit an <strong>ajnunidriton@gmail.com</strong> gesendet. FormSubmit ist ein externer Dienst und verarbeitet die Übermittlung.</p><label class="consent-choice" for="consent-email-delivery"><input id="consent-email-delivery" type="checkbox" data-answer="consent-email-delivery"${deliveryConsent ? " checked" : ""}><span>Ich möchte meine Antworten per E-Mail an diese Adresse senden.</span></label><button class="button button-primary" type="button" id="submit-answers">Antworten per E-Mail senden <span aria-hidden="true">→</span></button><p class="delivery-status" id="delivery-status" role="status" aria-live="polite"></p></div></section>`;
}

function renderSection() {
  const section = sections[state.currentSection];
  nav.innerHTML = sections.map((item, index) => `<button type="button" class="nav-item" data-section="${index}"${index === state.currentSection ? ' aria-current="step"' : ""}><span class="nav-number">${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(item.title)}</span>${sectionHasAnswers(index) ? '<span class="nav-check" aria-label="Antworten vorhanden">✓</span>' : ""}</button>`).join("");
  let body = "";
  if (section.type === "artworks") body = renderArtworks();
  else if (section.type === "health") body = `${renderHealthConsent()}${renderQuestionList(section.questions)}`;
  else if (section.type === "photos") body = `${renderPhotoChecklist()}${renderQuestionList(section.questions)}`;
  else if (section.type === "copyReview") body = renderCopyReview();
  else body = renderQuestionList(section.questions);

  content.innerHTML = `<header class="section-header"><p class="section-kicker">Teil ${String(state.currentSection + 1).padStart(2, "0")} <span aria-hidden="true">/</span> 09</p><h2>${escapeHtml(section.title)}</h2><p class="section-description">${escapeHtml(section.description)}</p>${section.callout ? `<div class="section-callout">${escapeHtml(section.callout)}</div>` : ""}</header>${body}${section.calloutAfter ? `<div class="section-callout">${escapeHtml(section.calloutAfter)}</div>` : ""}${section.consent ? renderConsent() : ""}`;
  backButton.disabled = state.currentSection === 0;
  nextButton.innerHTML = state.currentSection === sections.length - 1 ? "Zum Anfang <span aria-hidden=\"true\">↑</span>" : "Weiter <span aria-hidden=\"true\">→</span>";
  closingNote.hidden = state.currentSection !== sections.length - 1;
  updateProgress();
}

function sectionHasAnswers(sectionIndex) {
  const prefixBySection = [
    ["displayName", "description", "location", "paintingSince", "artBeginning", "education", "exhibitions", "threeWords", "beyondInstagram"],
    ["style", "materials", "techniques", "themes", "inspiration", "process", "time", "workspace", "feeling", "proudOf"],
    ["artwork-"],
    ["faithVisibility", "calligraphyMeaning", "faithWords", "verseCheck", "verseArabic", "verseLanguage", "religiousBoundaries"],
    ["health-permission-", "artInDailyLife", "healthImpact", "healthWording", "inHerWords"],
    ["photo-check-", "existingPhotos", "excludedPhotos", "photographer"],
    ["offerings", "contactEmail", "publicEmail", "socialChannels", "shipping"],
    ["copy-"],
    ["siteLanguage", "siteFeedback", "mood", "missing", "remove", "domain", "reference", "anythingElse", "consent"],
  ][sectionIndex];
  return Object.entries(state.answers).some(([key, value]) => prefixBySection.some((prefix) => key.startsWith(prefix)) && (Array.isArray(value) ? value.length > 0 : Boolean(value)));
}

function updateProgress() {
  const answered = Object.values(state.answers).filter((value) => Array.isArray(value) ? value.length > 0 : Boolean(value)).length;
  const total = sections.reduce((count, section) => {
    if (section.type === "artworks") return count + (existingArtworks.length + 1 + state.extraArtworks) * artworkFields.length;
    if (section.type === "health") return count + section.questions.length + 5;
    if (section.type === "photos") return count + section.questions.length + 8;
    if (section.type === "copyReview") return count + copyRows.length * 2;
    return count + section.questions.length + (section.consent ? 4 : 0);
  }, 0);
  const percent = total ? Math.round((answered / total) * 100) : 0;
  progressValue.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute("aria-valuenow", String(percent));
  progressCaption.textContent = answered === 0 ? "Noch keine Antworten – du kannst jederzeit pausieren." : `${answered} ${answered === 1 ? "Antwort" : "Antworten"} gespeichert · du kannst jederzeit pausieren.`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function updateAnswer(target) {
  const key = target.dataset.answer;
  if (!key) return;
  if (target.type === "checkbox" && target.name) {
    const group = [...document.querySelectorAll(`input[name="${CSS.escape(target.name)}"]:checked`)].map((input) => input.value);
    state.answers[key] = group;
  } else if (target.type === "checkbox") {
    state.answers[key] = target.checked;
  } else {
    state.answers[key] = target.value;
  }
  saveState();
  updateProgress();
}

function getSubmissionMessage() {
  const labels = new Map();
  for (const section of sections) {
    for (const question of section.questions || []) {
      labels.set(question.key, `${section.title} — ${question.label}`);
    }
  }

  const artworkTitles = [...existingArtworks, "Weiteres Bild", ...Array.from({ length: state.extraArtworks }, (_, i) => `Weiteres Bild ${i + 2}`)];
  artworkTitles.forEach((title, index) => {
    for (const field of artworkFields) {
      labels.set(`artwork-${index}-${field.key}`, `${title} — ${field.label}`);
    }
  });

  const healthPermissions = [
    "Gar nichts zu meiner Gesundheit",
    "Nur allgemein, dass ich mit gesundheitlichen Herausforderungen lebe",
    "Der Name meiner Erkrankung (kraniozervikale Instabilität)",
    "Wie meine Gesundheit meine Art zu malen beeinflusst",
    "Fotos, auf denen man z. B. eine Halskrause oder Stütze sieht",
  ];
  healthPermissions.forEach((label, index) => labels.set(`health-permission-${index}`, `Gesundheit — ${label}`));

  const photoItems = [
    "Jedes Bild einzeln, frontal fotografiert, ohne Rahmen im Bild",
    "Jedes Bild mit Rahmen bzw. an der Wand",
    "Nahaufnahmen der Oberfläche (Pinselstriche, Struktur)",
    "Ein Porträtfoto von dir",
    "Du beim Malen",
    "Dein Arbeitsplatz / Atelier",
    "Du mit einem fertigen Bild",
    "Fotos von Ausstellungen oder Präsentationen",
  ];
  photoItems.forEach((label, index) => labels.set(`photo-check-${index}`, `Fotos — ${label}`));
  copyRows.forEach(([location], index) => {
    labels.set(`copy-${index}-approval`, `Website-Texte — ${location} — Freigabe`);
    labels.set(`copy-${index}-change`, `Website-Texte — ${location} — Änderung`);
  });
  labels.set("consent-agreement", "Einverständnis zur Verwendung für die Website");
  labels.set("consent-name", "Name");
  labels.set("consent-date", "Datum");

  const lines = Object.entries(state.answers)
    .filter(([key, value]) => key !== "consent-email-delivery" && labels.has(key) && (Array.isArray(value) ? value.length > 0 : value !== "" && value !== false && value != null))
    .map(([key, value]) => {
      const answer = Array.isArray(value) ? value.join(", ") : value === true ? "Ja" : String(value);
      return `${labels.get(key)}:\n${answer}`;
    });

  return `Fragebogen für Blerta — deine Website\n${new Date().toLocaleString("de-DE")}\n\n${lines.join("\n\n")}`;
}

async function submitAnswers(button) {
  const status = document.querySelector("#delivery-status");
  if (!state.answers["consent-email-delivery"]) {
    status.textContent = "Bitte bestätige zuerst, dass du deine Antworten per E-Mail senden möchtest.";
    status.classList.add("is-error");
    document.querySelector("#consent-email-delivery").focus();
    return;
  }

  status.classList.remove("is-error");
  status.textContent = "Deine Antworten werden gesendet …";
  button.disabled = true;
  try {
    const response = await fetch(SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: state.answers["consent-name"] || "Blerta",
        _subject: "Fragebogen für Blerta — neue Antworten",
        _template: "table",
        message: getSubmissionMessage(),
      }),
    });
    const result = await response.json();
    if (!response.ok || (result.success !== true && result.success !== "true")) {
      throw new Error(result.message || `E-Mail-Versand fehlgeschlagen (HTTP ${response.status}).`);
    }
    status.textContent = "Danke! Deine Antworten wurden zum Versand übermittelt. Es wird keine Bestätigungskopie an dich gesendet.";
    saveStatus.textContent = "Gesendet · lokale Kopie bleibt gespeichert";
  } catch (error) {
    status.textContent = "Der Versand hat nicht geklappt. Deine Antworten sind weiterhin in diesem Browser gespeichert. Bitte versuche es später erneut oder lade sie herunter.";
    status.classList.add("is-error");
    console.error("Fragebogen konnte nicht per E-Mail übermittelt werden.", error);
  } finally {
    button.disabled = false;
  }
}

nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (!button) return;
  state.currentSection = Number(button.dataset.section);
  saveState();
  renderSection();
  if (window.matchMedia("(max-width: 760px)").matches) content.scrollIntoView({ behavior: "smooth", block: "start" });
});

content.addEventListener("input", (event) => updateAnswer(event.target));
content.addEventListener("change", (event) => {
  if (event.target.matches('input[type="radio"], input[type="checkbox"]')) updateAnswer(event.target);
});
content.addEventListener("click", (event) => {
  const submitButton = event.target.closest("#submit-answers");
  if (submitButton) {
    submitAnswers(submitButton);
    return;
  }
  if (!event.target.closest("#add-artwork")) return;
  if (state.extraArtworks >= 12) {
    showToast("Du kannst bis zu 12 weitere Bilder ergänzen.");
    return;
  }
  state.extraArtworks += 1;
  saveState();
  renderSection();
  document.querySelector(".add-artwork").scrollIntoView({ behavior: "smooth", block: "center" });
});

backButton.addEventListener("click", () => {
  if (state.currentSection === 0) return;
  state.currentSection -= 1;
  saveState();
  renderSection();
  content.scrollIntoView({ behavior: "smooth", block: "start" });
});
nextButton.addEventListener("click", () => {
  state.currentSection = state.currentSection === sections.length - 1 ? 0 : state.currentSection + 1;
  saveState();
  renderSection();
  content.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#export-button").addEventListener("click", () => {
  const payload = {
    questionnaire: "Fragebogen für Blerta — deine Website",
    exportedAt: new Date().toISOString(),
    answers: state.answers,
    extraArtworks: state.extraArtworks,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "blerta-fragebogen-antworten.json";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Deine Antworten wurden auf dieses Gerät heruntergeladen.");
});
document.querySelector("#print-button").addEventListener("click", () => window.print());

renderSection();
