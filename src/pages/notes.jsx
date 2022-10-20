import { Button, IconWithButton } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import printDate from "../components/utils";

function Notes() {
  return (
    <div>
      {Object.entries(localStorage.getObj("Notes"))
        .sort((a, b) => {
          return b[1].time - a[1].time;
        })
        .map((val) => {
          console.log(val[1]);
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-blue-300 rounded-lg m-2 p-2 justify-items-start">
              <div className="font-medium leading-tight text-4xl mt-0 mb-2">
                {val[1].name}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-self-center lg:justify-self-end">
                <div className="text-center">{printDate(val[1].time)}</div>
                <div className="">
                  <Button className="" href={`/notes/${val[0]}`}>
                    <IconWithButton
                      reverse={true}
                      icon={
                        <ChevronDoubleRightIcon className="transform translate-z-0 h-7 w-7" />
                      }
                    >
                      Перейти
                    </IconWithButton>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Notes;
