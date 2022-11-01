import printDate from "../components/utils";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Button, IconWithButton } from "../components/button";

function PubError() {
  return (
    <div className="">
      <Button className="mb-4" href="/">
        <IconWithButton
          icon={
            <ChevronDoubleLeftIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Вернуться
        </IconWithButton>
      </Button>
      <div className="border border-blue-300 rounded-lg p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
            Ошибка в публикации заметки
          </h2>
          <div className="justify-self-center lg:justify-self-end">
            {printDate(Date.now())}
          </div>
        </div>
        <div className="w-full md">
          Заметка не была опубликована из-за неизвестной ошибки
        </div>
      </div>
    </div>
  );
}

export default PubError;
