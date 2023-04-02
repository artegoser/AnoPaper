import { Button, IconWithText } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import printDate from "../components/utils";

function Notes() {
  let notes = Object.entries(localStorage.getObj("Notes"))
    .sort((a, b) => {
      return b[1].time - a[1].time;
    })
    .map((val) => {
      return (
        <div
          className="grid grid-cols-1 lg:grid-cols-2 border border-blue-300 rounded-lg m-2 p-2 justify-items-start"
          key={val[0]}
        >
          <div className="font-medium leading-tight text-4xl mt-0 mb-2">
            {val[1].name}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-self-center lg:justify-self-end">
            <div className="text-center">{printDate(val[1].time)}</div>
            <div className="">
              <Button className="" href={`/notes/${val[0]}`}>
                <IconWithText
                  reverse={true}
                  icon={
                    <ChevronDoubleRightIcon className="transform translate-z-0 h-7 w-7" />
                  }
                >
                  Перейти
                </IconWithText>
              </Button>
            </div>
          </div>
        </div>
      );
    });

  if (notes.length === 0)
    return (
      <div className="md">
        <h3>Заметок пока нет</h3>
      </div>
    );
  return notes;
}

export default Notes;
