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

import RenderMarkdown from "../components/markdown";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { printDate } from "../components/utils";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { ButtonWithIcon } from "../components/button";

function PubNote() {
  let params = useParams();

  let [note, setNote] = useState(false);

  if (note === false)
    fetch(`/get-note/del/${params.id}`)
      .then((data) => {
        data
          .json()
          .then((data) => {
            setNote(data);
          })
          .catch(() => {
            setNote({
              text: "Такой публичной заметки не сущуествует",
              name: "Меня не существует",
              time: Date.now(),
              save: false,
            });
          });
      })
      .catch(() => {
        setNote({
          text: "Такой публичной заметки не сущуествует",
          name: "Меня не существует",
          time: Date.now(),
          save: false,
        });
      });
  else {
    if (note.save !== false) {
      localStorage.setItem("NotePubTime", note.time);
      localStorage.setItem("NoteName", note.name);
      localStorage.setItem("NoteText", note.text);
      return <Navigate to="/notes/save-local" replace={true} />;
    } else {
      return (
        <div className="">
          <ButtonWithIcon
            className="mb-4"
            href="/"
            text="Писать"
            icon={ChevronDoubleLeftIcon}
          />
          <div className="border border-blue-300 rounded-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
                {note.name || "Загрузка..."}
              </h2>
              <div className="justify-self-center lg:justify-self-end">
                {printDate(note.time || Date.now())}
              </div>
            </div>
            <div className="w-full md break-words">
              <RenderMarkdown>{note.text || "Загрузка..."}</RenderMarkdown>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PubNote;
