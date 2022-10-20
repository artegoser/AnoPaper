import ReactMarkdown from "react-markdown";
import NotePlaceholder from "../components/notePlaceholder";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function printDate(time) {
  time = new Date(time);
  function padStr(i) {
    return i < 10 ? "0" + i : "" + i;
  }

  let dateStr = `${padStr(time.getHours())}:${padStr(
    time.getMinutes()
  )}:${padStr(time.getSeconds())} ${padStr(time.getDate())}.${padStr(
    1 + time.getMonth()
  )}.${padStr(time.getFullYear())}`;

  return dateStr;
}

function Note() {
  let params = useParams();
  const [note, setNote] = useState(false);

  useEffect(() => {
    setNote(localStorage.getObj("Notes")[params.id]);
  }, []);

  if (note) {
    console.log(note);

    return (
      <div className="border border-blue-300 rounded-lg p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
            {note.name}
          </h2>
          <div className="justify-self-center lg:justify-self-end">
            {printDate(note.time)}
          </div>
        </div>
        <div className="w-full md">
          <ReactMarkdown>{note.text}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return <NotePlaceholder />;
}

export default Note;
