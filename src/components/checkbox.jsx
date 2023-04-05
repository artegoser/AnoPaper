function CheckBox(props) {
  return (
    <div className={`m-5 ${props.className}`}>
      <input
        className="appearance-none h-3 w-6 duration-500 checked:bg-blue-600 checked:border-blue-600 pr-3 border border-gray-300 rounded-lg mr-1 checked:shadow-lg checked:shadow-blue-600 transition ease-out cursor-pointer"
        type="checkbox"
        id={props.id}
        defaultChecked={props.checked}
        onClick={props.onClick}
        title={props.title}
      />
      <label
        title={props.title}
        className="inline-block cursor-pointer"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
}

export { CheckBox };
