import { ButtonWithIcon } from "../components/button";
import {
  ChevronDoubleRightIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { CheckBox } from "../components/checkbox";
import { useState } from "react";
import RenderMarkdown from "../components/markdown";
import { printDate } from "../components/utils";
import rehypeRemark from "rehype-remark/lib";
import ContentEditable from "react-contenteditable";
import ReactDOMServer from "react-dom/server";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {
  SettingsCheckBox,
  SettingsSection,
} from "../components/settingsInputs";
import { inputStyle } from "../components/styles";
import { Complete } from "../components/openai";

function nameUpdate(val, force) {
  if (Date.now() - window.lastSocketUpdate > window.socketTimeout || force) {
    socket.emit("nameChanged", {
      name: val,
      room: settings.CollabEditPassword,
    });
    window.lastSocketUpdate = Date.now();
  }
}

function textUpdate(val, force) {
  if (Date.now() - window.lastSocketUpdate > window.socketTimeout || force) {
    socket.emit("textChanged", {
      text: val,
      room: settings.CollabEditPassword,
    });
    window.lastSocketUpdate = Date.now();
  }
}

function CreateNote() {
  const [preview, setPreview] = useState(false);
  const [publicState, setPublicState] = useState(settings.publicNote);
  const [text, setText] = useState(localStorage.getItem("NoteText"));
  const [name, setName] = useState(localStorage.getItem("NoteName"));

  const [date, setDate] = useState(Date.now());

  async function previewChange(val) {
    let md = await unified()
      .use(remarkGfm)
      .use(remarkMath)
      .use(rehypeParse)
      .use(rehypeRemark)
      .use(remarkStringify)
      .process(val.target.value);

    md = md.value.trim();

    localStorage.setItem("NoteText", md);

    if (settings.CollabEdit === true) {
      socket.emit("textChanged", {
        text: md,
        room: settings.CollabEditPassword,
      });
    }
  }

  if (settings.CollabEdit === true) {
    if (!window.alreadyConnected) {
      socket.emit("joinRoom", settings.CollabEditPassword);
      window.alreadyConnected = true;
      window.lastSocketUpdate = Date.now();
      window.socketTimeout = 100;
    }

    socket.on("textChanged", (data) => {
      setText(data.text);
      localStorage.setItem("NoteText", data.text);
    });

    socket.on("nameChanged", (data) => {
      setName(data.name);
      localStorage.setItem("NoteName", data.name);
    });

    socket.on("roomJoined", (data) => {
      nameUpdate(localStorage.getItem("NoteName"), true);
      textUpdate(localStorage.getItem("NoteText"), true);
    });
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="text-center lg:text-left leading-tight text-2xl font-bold">
          {`${preview ? "" : locals.WriteNote}`}
        </h2>
        <CheckBox
          className="justify-self-center lg:justify-self-end"
          label={locals.Preview}
          id="preview"
          onClick={(val) => {
            setText(localStorage.getItem("NoteText"));
            setDate(Date.now());
            setPreview(val.target.checked);
          }}
        />
      </div>

      <input
        type="text"
        className={`mb-2 md:w-1/6 w-full ${inputStyle} ${
          preview ? "hidden" : ""
        }`}
        placeholder={locals.NoteName}
        maxLength={64}
        value={localStorage.getItem("NoteName") || ""}
        onChange={(e) => {
          setName(e.target.value);
          localStorage.setItem("NoteName", e.target.value);

          if (settings.CollabEdit === true) {
            nameUpdate(e.target.value);
            setTimeout(() => {
              nameUpdate(e.target.value);
            }, window.socketTimeout);
          }
        }}
      />
      <textarea
        className={`
          ${inputStyle}
          w-full
          ${preview ? "hidden" : ""}
        `}
        rows="10"
        placeholder={locals.NotePlaceholder}
        maxLength={5000}
        onChange={(e) => {
          setText(e.target.value);
          localStorage.setItem("NoteText", e.target.value);

          if (settings.CollabEdit === true) {
            textUpdate(e.target.value);
            setTimeout(() => {
              textUpdate(e.target.value);
            }, window.socketTimeout);
          }
        }}
        value={localStorage.getItem("NoteText") || ""}
      ></textarea>

      {preview && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
            {name}
          </h2>
          <div className="justify-self-center lg:justify-self-end">
            {printDate(Date.now())}
          </div>
        </div>
      )}
      {preview && (
        <div className="w-full md break-words">
          <ContentEditable
            disabled={!window.settings.editPreview}
            onChange={previewChange}
            html={ReactDOMServer.renderToString(
              <RenderMarkdown>{text}</RenderMarkdown>
            )}
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full">
        <SettingsCheckBox
          label={locals.PublicNote}
          title={locals.PublicNoteTitle}
          checked={settings.publicNote}
          settingName="publicNote"
          className="justify-self-center lg:justify-self-start"
          onClick={(val) => {
            setPublicState(val.target.checked);
          }}
        />
        <div className="justify-self-center lg:justify-self-end">
          <ButtonWithIcon
            icon={ChevronDoubleRightIcon}
            text={publicState ? locals.Publish : locals.Save}
            reverse={true}
            href={publicState ? "/notes/publish" : "/notes/save-local"}
            className="m-1"
          />
        </div>

        {settings.additionalFeatures && (
          <div className="justify-self-start lg:justify-self-start">
            <SettingsSection name={locals.AdditionalFeatures}>
              {!!settings.openAiKey && (
                <ButtonWithIcon
                  icon={DocumentTextIcon}
                  text={locals.AIComplete}
                  className="m-1"
                  w="w-full"
                  onClick={() => {
                    Complete(setText);
                  }}
                />
              )}
              <SettingsCheckBox
                label={locals.CollabEdit}
                settingName="CollabEdit"
              />
            </SettingsSection>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNote;
