import { Navigate } from "react-router-dom";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function Save() {
  let id = uuidv4();
  let name = localStorage.getItem("NoteName");
  let text = localStorage.getItem("NoteText");
  if (!name || !text) return <Navigate to={`/notes`} replace={true} />;

  let notesObj = localStorage.getObj("Notes");

  notesObj[id] = {
    name,
    text,
    time: Date.now(),
  };

  localStorage.setObj("Notes", notesObj);

  localStorage.removeItem("NoteName");
  localStorage.removeItem("NoteText");

  return <Navigate to={`/notes/${id}`} replace={true} />;
}

export default Save;
