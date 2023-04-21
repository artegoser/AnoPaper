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

import { Link } from "react-router-dom";

function Button({
  href,
  className,
  onClick,
  w,
  children,
  color = "bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-800",
}) {
  return (
    <Link to={href} className={className}>
      <div
        onClick={onClick}
        className={`transition-transform ${
          w ? w : "w-48"
        } ease-[cubic-bezier(.69,.58,.32,1.69)] hover:scale-105  p-2 pl-6 text-lg ${color} rounded-2xl ${className}`}
      >
        {children}
      </div>
    </Link>
  );
}

function IconWithText(props) {
  if (props.reverse) {
    return (
      <div className="grid place-content-end grid-cols-2">
        <div>{props.children}</div>
        <div className="justify-self-end">{props.icon}</div>
      </div>
    );
  }
  return (
    <div className="grid place-content-start grid-cols-4">
      <div>{props.icon}</div>
      <div className="justify-self-start col-span-3">{props.children}</div>
    </div>
  );
}

function ButtonWithIcon(props) {
  return (
    <Button
      href={props.href}
      className={props.className}
      onClick={props.onClick}
      w={props.w}
      color={props.color}
    >
      <IconWithText
        reverse={props.reverse}
        icon={
          <props.icon
            className={props.iconClass || "transform translate-z-0 h-7 w-7"}
          />
        }
      >
        {props.text}
      </IconWithText>
    </Button>
  );
}

export { Button, IconWithText, ButtonWithIcon };
