import { useParams } from "react-router-dom";
import { ChevronDoubleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, IconWithText } from "../components/button";
import Note from "../components/note";

function NotePage() {
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

        <Note note={note} />
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

export default NotePage;
