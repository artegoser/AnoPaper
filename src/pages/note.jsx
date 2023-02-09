import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import printDate from "../components/utils";
import { ChevronDoubleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, IconWithText } from "../components/button";

function Note() {
  let params = useParams();

  let note = localStorage.getObj("Notes")[params.id];

  if (note) {
    return (
      <div className="">
        <Button className="mb-4" href="/notes">
          <IconWithText
            icon={
              <ChevronDoubleLeftIcon className="transform translate-z-0 h-7 w-7" />
            }
          >
            Заметки
          </IconWithText>
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
          <div className="w-full md break-words">
            <ReactMarkdown>{note.text}</ReactMarkdown>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="justify-self-center lg:justify-self-end">
            <Button
              className="mt-4"
              href="/notes"
              onClick={() => {
                let notesObj = localStorage.getObj("Notes");

                delete notesObj[params.id];

                localStorage.setObj("Notes", notesObj);
              }}
            >
              <IconWithText
                icon={<TrashIcon className="transform translate-z-0 h-7 w-7" />}
              >
                Удалить
              </IconWithText>
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Button className="mb-4" href="/notes">
          <IconWithText
            icon={
              <ChevronDoubleLeftIcon className="transform translate-z-0 h-7 w-7" />
            }
          >
            Заметки
          </IconWithText>
        </Button>
        <div>Заметки не существует.</div>
      </div>
    );
  }
}

export default Note;
