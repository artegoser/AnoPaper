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
import { useState } from "react";
import { localesProcess } from "./components/utils";

function App() {
  Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
  };
  Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key)) || {};
  };

  const [key, setKey] = useState(Math.random());

  window.settings = localStorage.getObj("settings") || {};

  localesProcess();

  window.addEventListener("reRenderPage", () => {
    setKey(Math.random());
  });

  window.socket = socket;

  if (settings.userName == "bruh") {
    document.body.classList.add(
      "transition-transform",
      "transform",
      "rotate-180"
    );
  } else if (document.body.classList.contains("transition-transform")) {
    document.body.classList.remove("rotate-180");
    document.body.classList.add("rotate-0");
  }

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
                <RenderMarkdown>{locals.about_md}</RenderMarkdown>
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
