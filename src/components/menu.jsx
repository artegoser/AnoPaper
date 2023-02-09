import { Button, IconWithText } from "./button";
import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  ExclamationCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function Menu() {
  return (
    <div className="grid grid-cols-1 col-span-4 lg:col-span-1 gap-2 m-4 place-content-start justify-self-center justify-center">
      <Button href="/notes">
        <IconWithText
          icon={
            <MagnifyingGlassCircleIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Заметки
        </IconWithText>
      </Button>
      <Button href="/">
        <IconWithText
          icon={<PencilIcon className="transform translate-z-0 h-7 w-7" />}
        >
          Написать
        </IconWithText>
      </Button>
      <Button href="/about">
        <IconWithText
          icon={
            <ExclamationCircleIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Подробнее
        </IconWithText>
      </Button>
    </div>
  );
}

export default Menu;
