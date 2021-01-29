const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: "src/Translations",
  translationsDirectory: "src/Main/Tourism/Translations",
  languages: ["en", "de"],
  detectDuplicateIds: false
});
