import { ButtonWithIcon } from "./button";
import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  ExclamationCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function Menu() {
  return (
    <div className="grid grid-cols-1 col-span-4 lg:col-span-1 gap-2 m-4 place-content-start justify-self-center justify-center">
      <ButtonWithIcon
        icon={MagnifyingGlassCircleIcon}
        text="Заметки"
        href="/notes"
      />
      <ButtonWithIcon icon={PencilIcon} text="Написать" href="/" />
      <ButtonWithIcon icon={Cog6ToothIcon} text="Настройки" href="/settings" />
      <ButtonWithIcon
        icon={ExclamationCircleIcon}
        text="Подробнее"
        href="/about"
      />
    </div>
  );
}

export default Menu;
