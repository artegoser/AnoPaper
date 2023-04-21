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
          iconClass={`transition-transform transform translate-z-0 h-7 w-7 ${
            !hidden ? "rotate-180" : "rotate-0"
          }`}
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
