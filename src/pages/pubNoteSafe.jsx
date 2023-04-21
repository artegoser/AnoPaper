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
