import { useParams } from "react-router-dom";
import { ChevronDoubleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ButtonWithIcon } from "../components/button";
import Note from "../components/note";

function NotePage() {
  let params = useParams();

  let note = localStorage.getObj("Notes")[params.id];

  return (
    <div className="">
      <ButtonWithIcon
        icon={ChevronDoubleLeftIcon}
        className="mb-4"
        href="/notes"
        text={locals.Notes}
      />

      {note ? <Note note={note} /> : <div>{locals.NoteNotExists}</div>}
      {note && (
        <div className="grid grid-cols-1">
          <div className="justify-self-center lg:justify-self-end">
            <ButtonWithIcon
              className="mt-4"
              href="/notes"
              text={locals.Delete}
              icon={TrashIcon}
              onClick={() => {
                let notesObj = localStorage.getObj("Notes");

                delete notesObj[params.id];

                localStorage.setObj("Notes", notesObj);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NotePage;
