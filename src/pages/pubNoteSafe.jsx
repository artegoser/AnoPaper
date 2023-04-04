import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { ButtonWithIcon } from "../components/button";
import { CopyToClipboard } from "../components/copytocb";
import Note from "../components/note";

function PubNoteSafe() {
  let params = useParams();

  let [note, setNote] = useState(false);
  let nullNote = {
    text: locals.PubNoteNotExist,
    name: locals.Idontexists,
    time: Date.now(),
    code: 0,
  };

  if (note === false)
    fetch(`/get-note/safe/${params.id}`)
      .then((data) => {
        data
          .json()
          .then((data) => {
            data.code = 1;
            setNote(data);
          })
          .catch(() => {
            setNote(nullNote);
          });
      })
      .catch(() => {
        setNote(nullNote);
      });

  return (
    <div className="">
      <ButtonWithIcon
        className="mb-4"
        href="/"
        text={locals.Write}
        icon={ChevronDoubleLeftIcon}
      />

      {note?.code === 1 && (
        <div className="p-4 mb-2">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <h2 className="font-medium text-center lg:text-left p-2">
              {locals.PubUrlPlaceholder}
            </h2>
            <CopyToClipboard
              text={`${window.location.origin}/pubNotes/${params.id}`}
            ></CopyToClipboard>
          </div>
        </div>
      )}

      <Note note={note} />
    </div>
  );
}

export default PubNoteSafe;
