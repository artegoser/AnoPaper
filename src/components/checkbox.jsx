function CheckBox(props) {
  return (
    <div className={`form-check m-5 ${props.className}`}>
      <input
        className="form-check-input appearance-none h-3 w-6 duration-500 checked:bg-blue-600 checked:border-blue-600 pr-3 border border-gray-300 rounded-lg mr-1 checked:shadow-lg checked:shadow-blue-600 transition ease-out"
        type="checkbox"
        id={props.id}
        defaultChecked={props.checked}
        onClick={props.onClick}
      />
      <label className="form-check-label inline-block" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export { CheckBox };
