/*
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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
