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
