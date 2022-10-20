import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function Save() {
  const navigate = useNavigate();
  let done = false;

  useEffect(() => {
    if (!done) {
      done = true;
      let id = uuidv4();

      let notesObj = localStorage.getObj("Notes");

      notesObj[`${id}`] = {
        name: localStorage.getItem("NoteName"),
        text: localStorage.getItem("NoteText"),
        time: Date.now(),
      };

      localStorage.setObj("Notes", notesObj);

      localStorage.removeItem("NoteName");
      localStorage.removeItem("NoteText");

      navigate(`/notes/${id}`, { replace: true });
    }
  }, []);

  return <div />;
}

export default Save;
