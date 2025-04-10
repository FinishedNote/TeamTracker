import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: translationFR },
    en: { translation: translationEN },
  },
  lng: "fr", // langue par défaut
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
