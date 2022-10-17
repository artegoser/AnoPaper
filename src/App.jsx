import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import CreateNote from "./pages/create";

function App() {
  return (
    <div className="grid grid-cols-4  lg:grid-cols-5  gap-10 text-black dark:text-white">
      <Menu />
      <div className="col-span-4 p-5 m-4 rounded-2xl">
        <Routes>
          <Route path="/" element={<CreateNote />} />
          <Route
            path="/about"
            element={<div className="col-span-4">О сервисе</div>}
          />
          <Route
            path="/notes"
            element={<div className="col-span-4">Заметки со всего мира</div>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
