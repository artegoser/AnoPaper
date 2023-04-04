import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import CreateNote from "./pages/create";
import Save from "./pages/save-local";
import Publish from "./pages/publish";
import NotePage from "./pages/note";
import Notes from "./pages/notes";
import PubNote from "./pages/pubNote";
import PubError from "./pages/pubError";
import PubNoteSafe from "./pages/pubNoteSafe";
import RenderMarkdown from "./components/markdown";
import socket from "./components/socket";
import Settings from "./pages/settings";
import Locales from "./localisation/main";
import { useState } from "react";

function App() {
  Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
  };
  Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key)) || {};
  };

  const [key, setKey] = useState(Math.random());

  window.settings = localStorage.getObj("settings") || {};
  window.locals =
    Locales[window.settings.language] ||
    Locales[navigator.language] ||
    Locales[navigator.userLanguage] ||
    Locales.en;

  window.addEventListener("reRenderPage", () => {
    setKey(Math.random());
  });

  window.socket = socket;

  return (
    <div
      className="grid grid-cols-4  lg:grid-cols-5  gap-10 text-black dark:text-white"
      key={key}
    >
      <Menu />
      <div className="col-span-4 p-5 m-4 rounded-2xl">
        <Routes>
          <Route path="/" element={<CreateNote />} />
          <Route path="/notes/save-local" element={<Save />} />
          <Route path="/notes/publish" element={<Publish />} />
          <Route path="/notes/:id" element={<NotePage />} />
          <Route path="/pubNotes/:id" element={<PubNote />} />
          <Route path="/pubNotesSafe/:id" element={<PubNoteSafe />} />
          <Route path="/pubError" element={<PubError />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/about"
            element={
              <div className="col-span-4 md">
                <RenderMarkdown>
                  {`## Anopaper - сервис анонимных записок
                  \rAnoPaper позволяет анонимно сохранять и публиковать заметки.  
                  \r-----
                  \r### Функционал:  
                  
                  \r* Заметки поддерживают формат markdown. Например запись:  \`### Заголовок 3-го уровня\` будет выглядеть так:  
                  \r> ### Заголовок 3-го уровня

                  \r*Так же поддерживается синтаксис mathjax* Например запись: \`$\\sum_{i=1}^n i^2$\` будет выглядеть так: $\\sum_{i=1}^n i^2$
             
               
                  \r* Публичные заметки доступны только по ссылке.
                  \r* При переходе по ссылке заметка сохраняется локально и удаляется с сервера.
                  \r* Не публичные заметки сохраняются локально и не отправляются на сервер.`}
                </RenderMarkdown>
              </div>
            }
          />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
