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

import { Locales } from "../localisation/main";

function printDate(time) {
  time = new Date(time);
  return time.toLocaleString(settings.language);
}

function reRenderPage() {
  window.dispatchEvent(new Event("reRenderPage"));
}

function localesProcess(reRender) {
  let locale =
    window.settings.language ||
    navigator.language ||
    navigator.userLanguage ||
    "en-US";

  let lang = locale.split("-")[0];

  let localeObj = Object.assign({}, Locales.en);
  Object.assign(localeObj, Locales[lang]);
  Object.assign(localeObj, Locales[locale]);

  window.locals = localeObj;

  if (reRender) reRenderPage();
}

export { printDate, reRenderPage, localesProcess };
