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

import { useParams } from "react-router-dom";
import {
  ChevronDoubleLeftIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ButtonWithIcon } from "../components/button";
import Note from "../components/note";
import { useState } from "react";
import {
  NoteNameInput,
  NoteTextArea,
  NotesAdditionalSettings,
} from "../components/settingsInputs";

function NotePage() {
  let params = useParams();

  let notes = localStorage.getObj("Notes");
  let note = notes[params.id];

  let [edit, setEdit] = useState(false);

  return (
    <div className="">
      <ButtonWithIcon
        icon={ChevronDoubleLeftIcon}
        className="mb-4"
        href="/notes"
        text={locals.Notes}
      />

      {note ? (
        edit ? (
          <>
            <NoteNameInput
              value={note.name}
              onChange={(e) => (note.name = e.target.value)}
            />
            <NoteTextArea
              value={note.text}
              onChange={(e) => (note.text = e.target.value)}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full">
              <NotesAdditionalSettings
                noteText={note.text}
                onClick={(text) => {
                  note.text = text;
                }}
              />
            </div>
          </>
        ) : (
          <Note note={note} />
        )
      ) : (
        <div>{locals.NoteNotExists}</div>
      )}
      {note && (
        <div className="grid grid-cols-1">
          <div className="justify-self-center lg:justify-self-end">
            <ButtonWithIcon
              className="mt-4"
              text={locals.Edit}
              icon={PencilIcon}
              onClick={() => {
                setEdit(!edit);

                if (edit) {
                  localStorage.setObj("Notes", notes);
                }
              }}
            />
            {!edit && (
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
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotePage;
