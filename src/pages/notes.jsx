import { ButtonWithIcon } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { printDate } from "../components/utils";
import Fuse from "fuse.js";
import { inputStyle } from "../components/styles";
import { useState } from "react";
import { setSetting } from "../components/settingsInputs";
import RemoveMarkdown from "remove-markdown";

function Notes() {
  if (!settings.newNotes) {
    let notesObj = localStorage.getObj("Notes");
    let notes = Object.entries(notesObj);
    for (let [id, note] of notes) {
      note.id = id;
      note.textTime = printDate(note.time);
      notesObj[id] = note;
    }
    localStorage.setObj("Notes", notesObj);
    setSetting("newNotes", true);
  }

  let n = Object.values(localStorage.getObj("Notes"));

  const [search, setSearch] = useState("");
  const [indexed, setIndexed] = useState(false);

  if (search && !indexed) {
    window.fuseIndex = new Fuse(n, {
      includeScore: true,
      useExtendedSearch: true,
      keys: [
        "name",
        "textTime",
        {
          name: "text",
          getFn: (obj) => RemoveMarkdown(obj.text),
        },
      ],
    });
    setIndexed(true);
  }

  let found = search === "" ? n : window.fuseIndex.search(search);

  if (search !== "") {
    found = found
      .sort((a, b) => {
        return a.score - b.score;
      })
      .map(({ item }) => item);
  } else {
    found = found.sort((a, b) => {
      return b.time - a.time;
    });
  }

  let notes = found.map((item) => {
    return (
      <div
        className="grid grid-cols-1 lg:grid-cols-2 border border-blue-300 rounded-lg m-2 p-2 justify-items-start"
        key={item.id}
      >
        <div className="font-medium leading-tight text-4xl mt-0 mb-2">
          {item.name}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-self-center lg:justify-self-end">
          <div className="text-center">{printDate(item.time)}</div>
          <div className="">
            <ButtonWithIcon
              href={`/notes/${item.id}`}
              reverse={true}
              icon={ChevronDoubleRightIcon}
              text={locals.Open}
            />
          </div>
        </div>
      </div>
    );
  });

  if (n.length === 0) {
    return (
      <div className="md">
        <h3>{locals.NoNotesYet}</h3>
      </div>
    );
  }

  return (
    <div className="">
      <input
        type="text"
        className={`mb-2 md:w-1/6 w-full ${inputStyle}`}
        placeholder={locals.Search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {notes}
      {found.length === 0 && (
        <div className="md">
          <h3>{locals.NoNotesFound}</h3>
        </div>
      )}
    </div>
  );
}

export default Notes;
