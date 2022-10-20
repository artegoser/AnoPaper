import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import printDate from "../components/utils";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Button, IconWithButton } from "../components/button";

function Note() {
  let params = useParams();
  const [note, setNote] = useState(false);

  useEffect(() => {
    setNote(localStorage.getObj("Notes")[params.id]);
  }, []);

  if (note) {
    return (
      <div className="">
        <Button className="mb-4" href="/notes">
          <IconWithButton
            icon={
              <ChevronDoubleLeftIcon className="transform translate-z-0 h-7 w-7" />
            }
          >
            Заметки
          </IconWithButton>
        </Button>
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
      </div>
    );
  } else {
    return <div />;
  }
}

export default Note;
