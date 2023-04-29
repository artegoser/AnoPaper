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

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Publish() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let err = false;

    let note;

    if (searchParams.get("local_id")) {
      let localNote =
        localStorage.getObj("Notes")[searchParams.get("local_id")];
      note = {
        name: localNote.name,
        text: localNote.text,
      };
    } else {
      note = {
        name: localStorage.getItem("NoteName"),
        text: localStorage.getItem("NoteText"),
      };
    }

    if (!note.name) {
      err = locals.PubErrorMsgNoName;
    }
    if (!note.text) {
      err = locals.PubErrorMsgNoText;
    }

    fetch(`/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(note),
    })
      .then((data) => {
        data
          .json()
          .then((data) => {
            localStorage.removeItem("NoteName");
            localStorage.removeItem("NoteText");
            navigate(`/pubNotesSafe/${data.id}`, { replace: true });
          })
          .catch(() => {
            if (err == false) {
              navigate(`/pubError`, { replace: true });
            } else navigate(`/pubError?err=${err}`, { replace: true });
          });
      })
      .catch(() => {
        navigate(`/pubError`, { replace: true });
      });
  });

  return <div />;
}

export default Publish;
