/*
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { ButtonWithIcon } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
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
  NoteNameInput,
  NoteTextArea,
  NotesAdditionalSettings,
  SettingsCheckBox,
} from "../components/settingsInputs";

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

    socket.on("roomJoined", () => {
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
            setPreview(val.target.checked);
          }}
        />
      </div>

      <NoteNameInput
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
        preview={preview}
      />

      <NoteTextArea
        value={localStorage.getItem("NoteText") || ""}
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
        preview={preview}
      />

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

        <NotesAdditionalSettings />
      </div>
    </div>
  );
}

export default CreateNote;
