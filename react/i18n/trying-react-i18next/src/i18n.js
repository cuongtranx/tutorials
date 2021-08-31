import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Locize from "i18next-locize-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Locize)
  .init({
    fallbackLn: "en-CA",
    keySeperator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      projectId: process.env.REACT_APP_LOCIZE_PROJECT_ID,
      apiKey: process.env.REACT_APP_LOCIZE_API_KEY,
      //referenceLng: "en-CA",
    },
  });

export default i18n;
