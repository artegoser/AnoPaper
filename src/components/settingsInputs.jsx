import { CheckBox } from "./checkbox";
import { inputStyle } from "./styles";

function SettingsCheckBox({ label, title, className, settingName, onClick }) {
  return (
    <CheckBox
      label={label}
      title={title}
      checked={settings[settingName]}
      className={className}
      onClick={(e) => {
        window.settings[settingName] = e.target.checked;
        localStorage.setObj("settings", window.settings);
        onClick && onClick(e);
      }}
    />
  );
}

function SettingsTextInput({
  placeholder,
  title,
  label,
  className,
  settingName,
  onChange,
  secret,
}) {
  return (
    <div className="ml-2">
      <label className="block mb-2 text-base font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <input
        className={`${inputStyle} m-2 ${className}`}
        type={secret ? "password" : "text"}
        placeholder={placeholder}
        title={title}
        defaultValue={window.settings[settingName]}
        onChange={(e) => {
          window.settings[settingName] = e.target.value;
          localStorage.setObj("settings", window.settings);
          onChange && onChange(e);
        }}
      />
    </div>
  );
}

function SettingsSelectInput({
  label,
  className,
  settingName,
  options,
  onChange,
}) {
  return (
    <div className="ml-2">
      <label className="block mb-2 text-base font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <select
        className={`${inputStyle} m-2 ${className}`}
        defaultValue={window.settings[settingName]}
        onChange={(e) => {
          window.settings[settingName] = e.target.value;
          localStorage.setObj("settings", window.settings);
          onChange && onChange(e);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function SettingsPlaceholder({ text }) {
  return (
    <h1 className="text-center lg:text-left leading-tight text-xl font-semibold">
      {text}
    </h1>
  );
}

export {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
  SettingsPlaceholder,
};
