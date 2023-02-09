import { Button, IconWithText } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { CheckBox } from "../components/checkbox";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function CreateNote() {
  const [preview, setPreview] = useState(false);
  const [publicState, setPublicState] = useState(true);
  const [text, setText] = useState(localStorage.getItem("NoteText"));
  const [name, setName] = useState(localStorage.getItem("NoteName"));

  let inputStyle = `form-control block px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white dark:bg-zinc-900 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out focus:border-blue-600 focus:outline-none`;
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
          Написать заметку
        </h2>
        <CheckBox
          className="justify-self-center lg:justify-self-end"
          label="Предпросмотр"
          id="preview"
          onClick={() => setPreview(!preview)}
        />
      </div>

      <input
        type="text"
        className={`mb-2 md:w-1/6 w-full ${inputStyle}`}
        placeholder="Название заметки..."
        maxLength={64}
        value={localStorage.getItem("NoteName") || ""}
        onChange={(e) => {
          localStorage.setItem("NoteName", e.target.value);
          setName(e.target.value);
        }}
      />
      <textarea
        className={`
          ${inputStyle}
          w-full
          ${preview ? "hidden" : ""}
        `}
        rows="10"
        placeholder="Ваша заметка начинается здесь. Можно использовать markdown..."
        maxLength={5000}
        onChange={(e) => {
          localStorage.setItem("NoteText", e.target.value);
          setText(e.target.value);
        }}
        value={localStorage.getItem("NoteText") || ""}
      ></textarea>

      {preview && (
        <div className="w-full md break-words">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full">
        <CheckBox
          className="justify-self-center lg:justify-self-start"
          label="Публичная заметка"
          title="Если включено, то заметка будет видна всем пользователям"
          id="public"
          onClick={() => {
            setPublicState(!publicState);
          }}
          checked={localStorage.getItem("private")}
        />
        <div className="justify-self-center lg:justify-self-end">
          <Button
            className="m-5"
            href={publicState ? "/notes/save-local" : "/notes/publish"}
          >
            <IconWithText
              reverse={true}
              icon={
                <ChevronDoubleRightIcon className="transform translate-z-0 h-7 w-7" />
              }
            >
              Отправить
            </IconWithText>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
