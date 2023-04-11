import { ButtonWithIcon } from "./button";
import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  ExclamationCircleIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function Menu() {
  const [hidden, setHidden] = useState(window.innerWidth < 1024 ? true : false);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 col-span-4 lg:col-span-1 gap-2 mt-4 lg:m-4 place-content-start justify-self-center justify-center">
      {window.innerWidth < 1024 && (
        <ButtonWithIcon
          icon={ChevronDownIcon}
          text={locals.Menu}
          reverse
          className="col-span-2 lg:col-span-1 justify-self-center"
          color="bg-sky-600 hover:bg-sky-800 dark:bg-sky-800 dark:hover:bg-sky-900 text-white"
          onClick={() => {
            setHidden(!hidden);
          }}
        />
      )}
      {!hidden && (
        <>
          <ButtonWithIcon
            icon={MagnifyingGlassCircleIcon}
            text={locals.Notes}
            href="/notes"
          />
          <ButtonWithIcon icon={PencilIcon} text={locals.Write} href="/" />
          <ButtonWithIcon
            icon={Cog6ToothIcon}
            text={locals.Settings}
            href="/settings"
          />
          <ButtonWithIcon
            icon={ExclamationCircleIcon}
            text={locals.About}
            href="/about"
          />
        </>
      )}
    </div>
  );
}

export default Menu;
