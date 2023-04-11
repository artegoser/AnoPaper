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
