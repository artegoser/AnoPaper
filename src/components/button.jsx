import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.href} className={props.className}>
      <div
        className={`transition-transform w-48 ease-[cubic-bezier(.69,.58,.32,1.69)] delay-60 hover:scale-105  p-2 pl-6 text-lg bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-800 rounded-2xl ${props.className}`}
      >
        {props.children}
      </div>
    </Link>
  );
}

function ButtonWithAction(props) {
  return (
    <div
      onClick={props.onClick}
      className={`transition-transform w-48 ease-[cubic-bezier(.69,.58,.32,1.69)] delay-60 hover:scale-105  p-2 pl-6 text-lg bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-800 rounded-2xl ${props.className}`}
    >
      {props.children}
    </div>
  );
}

function IconWithButton(props) {
  if (props.reverse) {
    return (
      <div className="grid place-content-end grid-cols-2">
        <div>{props.children}</div>
        <div className="justify-self-end">{props.icon}</div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4">
      <div>{props.icon}</div>
      <div className="grid-span-3">{props.children}</div>
    </div>
  );
}

export { Button, IconWithButton, ButtonWithAction };
