import { ButtonWithAction, IconWithButton } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { CheckBox } from "../components/checkbox";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function CreateNote() {
  const [preview, setPreview] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
          Написать записку
        </h2>
        <CheckBox
          className="justify-self-center lg:justify-self-end"
          label="Предпросмотр"
          id="preview"
          onClick={() => setPreview(!preview)}
        />
      </div>

      <div className="w-full md">
        <ReactMarkdown className={!preview ? "hidden" : ""}>
          {text}
        </ReactMarkdown>
      </div>

      <textarea
        className={`
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
        text-gray-700
        dark:text-white
        bg-white 
        dark:bg-zinc-900
          bg-clip-padding
          border 
          border-solid 
        border-gray-300
          rounded-lg
          transition
          ease-in-out
          m-0
        focus:border-blue-600 
          focus:outline-none
          ${preview ? "hidden" : ""}
        `}
        rows="10"
        placeholder="Ваша записка начинается здесь. Можно использовать markdown..."
        maxLength={5000}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full">
        <CheckBox
          className="justify-self-center lg:justify-self-start"
          label="Публичная записка"
          id="public"
          onClick={""}
          checked
        />
        <div className="justify-self-center lg:justify-self-end">
          <ButtonWithAction className="m-5" onClick={""}>
            <IconWithButton
              reverse={true}
              icon={
                <ChevronDoubleRightIcon className="transform translate-z-0 h-7 w-7" />
              }
            >
              Отправить
            </IconWithButton>
          </ButtonWithAction>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
