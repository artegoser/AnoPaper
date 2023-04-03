import RenderMarkdown from "../components/markdown";
import printDate from "./utils";

function Note({ note }) {
  return (
    <div className="border border-blue-300 rounded-lg p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
          {note.name}
        </h2>
        <div className="justify-self-center lg:justify-self-end">
          {`${printDate(note.time)} ${
            note.pub ? "| Публичная" : "| Локальная"
          }`}
        </div>
      </div>
      <div className="w-full md break-words">
        <RenderMarkdown>{note.text}</RenderMarkdown>
      </div>
    </div>
  );
}

export default Note;
