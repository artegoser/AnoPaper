import ru from "./ru";
import en from "./en";
import es from "./es";

let Locales = {
  ru,
  en,
  es,
};

let langChoices = [
  {
    value: "ru-RU",
    label: "Русский",
  },
  {
    value: "en-US",
    label: "English (US)",
  },
  {
    value: "es",
    label: "Español",
  },
];

export { Locales, langChoices };
