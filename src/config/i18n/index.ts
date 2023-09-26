import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import zhJSON from "@/config/i18n/locales/zh.translation.json";
import enJSON from "@/config/i18n/locales/en.translation.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    zh: { ...zhJSON },
  },
  lng: "en",
});
