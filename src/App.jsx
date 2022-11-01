import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import CreateNote from "./pages/create";
import Save from "./pages/save-local";
import Publish from "./pages/publish";
import Note from "./pages/note";
import Notes from "./pages/notes";
import PubNote from "./pages/pubNote";
import PubError from "./pages/pubError";

function App() {
  Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
  };
  Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key)) || {};
  };

  return (
    <div className="grid grid-cols-4  lg:grid-cols-5  gap-10 text-black dark:text-white">
      <Menu />
      <div className="col-span-4 p-5 m-4 rounded-2xl">
        <Routes>
          <Route path="/" element={<CreateNote />} />
          <Route path="/notes/save-local" element={<Save />} />
          <Route path="/notes/publish" element={<Publish />} />
          <Route path="/notes/:id" element={<Note />} />
          <Route path="/pubNotes/:id" element={<PubNote />} />
          <Route path="/pubError" element={<PubError />} />
          <Route
            path="/about"
            element={<div className="col-span-4">О сервисе</div>}
          />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
