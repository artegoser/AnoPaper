import { Button, IconWithButton } from "./button";
import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

function Menu() {
  return (
    <div className="grid grid-cols-1 col-span-4 lg:col-span-1 gap-2 m-4 place-content-start justify-self-center justify-center">
      <Button href="/notes">
        <IconWithButton
          icon={
            <MagnifyingGlassCircleIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Заметки
        </IconWithButton>
      </Button>
      <Button href="/">
        <IconWithButton
          icon={<PencilIcon className="transform translate-z-0 h-7 w-7" />}
        >
          Написать
        </IconWithButton>
      </Button>
      <Button href="/about">
        <IconWithButton
          icon={
            <ExclamationCircleIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Подробнее
        </IconWithButton>
      </Button>
    </div>
  );
}

export default Menu;
