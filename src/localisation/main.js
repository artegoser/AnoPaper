import ru from "./ru";
import en from "./en";
import es from "./es";
import eo from "./eo";

let Locales = {
  ru,
  en,
  es,
  eo,
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
  {
    value: "eo",
    label: "Esperanto",
  },
];

export { Locales, langChoices };
