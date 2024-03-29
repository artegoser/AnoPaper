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

import { Navigate } from "react-router-dom";
import { timestamp2text } from "../components/utils";

function Save() {
  let name = localStorage.getItem("NoteName");
  let text = localStorage.getItem("NoteText");
  let pubTime = Number(localStorage.getItem("NotePubTime"));

  if (!name || !text) return <Navigate to={`/notes`} replace={true} />;

  let notesObj = localStorage.getObj("Notes");

  let time = Date.now();

  notesObj[time] = {
    id: time,
    name,
    text,
    time,
    textTime: timestamp2text(time),
    pubTime,
    pub: !!pubTime,
  };

  localStorage.setObj("Notes", notesObj);

  localStorage.removeItem("NoteName");
  localStorage.removeItem("NoteText");
  localStorage.removeItem("NotePubTime");

  return <Navigate to={`/notes/${id}`} replace={true} />;
}

export default Save;
