import ru from "./ru";
import en from "./en";
import es from "./es";
import eo from "./eo";
import ja from "./ja";
import zh from "./zh";

let Locales = {
  ru,
  en,
  es,
  eo,
  ja,
  zh,
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
  {
    value: "ja-JP",
    label: "日本語",
  },
  {
    value: "zh-CN",
    label: "中国人",
  },
];

export { Locales, langChoices };
