import RenderMarkdown from "../components/markdown";
import { useState } from "react";
import { useParams } from "react-router-dom";
import printDate from "../components/utils";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Button, IconWithText } from "../components/button";
import { CopyToClipboard } from "../components/copytocb";
import Note from "../components/note";

function PubNoteSafe() {
  let params = useParams();

  let [note, setNote] = useState(false);

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
            setNote({
              text: "Такой публичной заметки не сущуествует",
              name: "Меня не существует",
              time: Date.now(),
              code: 0,
            });
          });
      })
      .catch(() => {
        setNote({
          text: "Такой публичной заметки не сущуествует",
          name: "Меня не существует",
          time: Date.now(),
          code: 0,
        });
      });

  return (
    <div className="">
      <Button className="mb-4" href="/">
        <IconWithText
          icon={
            <ChevronDoubleLeftIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Писать
        </IconWithText>
      </Button>

      {note?.code === 1 && (
        <div className="p-4 mb-2">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <h2 className="font-medium text-center lg:text-left p-2">
              Ссылка для отправки публичной заметки. При переходе на эту ссылку,
              заметка исчезнет с сервера и будет сохранена локально.
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
