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

function timestamp2text(time) {
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

async function getNetLocale(lang, fileName) {
  return (await (await fetch(`localisation/${lang}/${fileName}`)).text()) || "";
}

function nameUpdate(val) {
  socket.emit("nameChanged", {
    name: val,
    room: settings.CollabEditPassword,
  });
  window.lastSocketUpdate = Date.now();
}

function textUpdate(val) {
  socket.emit("textChanged", {
    text: val,
    room: settings.CollabEditPassword,
  });
  window.lastSocketUpdate = Date.now();
}

function collab_edit_init(setName, setText, saveToLocalStorage = true) {
  if (settings.CollabEdit === true) {
    if (!window.alreadyConnected) {
      socket.emit("joinRoom", settings.CollabEditPassword);
      window.alreadyConnected = true;
      window.lastSocketUpdate = Date.now();
      window.socketTimeout = 100;
      window.nameChanged = false;
      window.textChanged = false;

      setInterval(() => {
        if (window.nameChanged) {
          nameUpdate(window.nameChanged);
          window.nameChanged = false;
        }

        if (window.textChanged) {
          textUpdate(window.textChanged);
          window.textChanged = false;
        }
      }, window.socketTimeout);
    }

    socket.on("textChanged", (data) => {
      setText(data.text);
      if (saveToLocalStorage) localStorage.setItem("NoteText", data.text);
      document.getElementById("noteTextArea").value = data.text;
    });

    socket.on("nameChanged", (data) => {
      setName(data.name);
      if (saveToLocalStorage) localStorage.setItem("NoteName", data.name);
      document.getElementById("noteNameInput").value = data.name;
    });

    socket.on("roomJoined", () => {
      nameUpdate(localStorage.getItem("NoteName"), true);
      textUpdate(localStorage.getItem("NoteText"), true);
    });
  }
}

export {
  timestamp2text,
  reRenderPage,
  localesProcess,
  getNetLocale,
  collab_edit_init,
  nameUpdate,
  textUpdate,
};
