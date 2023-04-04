import { CheckBox } from "./checkbox";
import { inputStyle, settingsAddInput } from "./styles";

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
    <div>
      <label className="block mb-2 text-base font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <input
        className={`${inputStyle} ${settingsAddInput} m-2 ${className}`}
        type={secret ? "password" : "text"}
        placeholder={placeholder}
        title={title}
        autoComplete="new-password"
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
    <div>
      <label className="block mb-2 text-base font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <select
        className={`${inputStyle} ${settingsAddInput} m-2 ${className}`}
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

function SettingsSection({ name, children }) {
  return (
    <div className="ml-0 lg:ml-6 mt-6 lg:mt-3">
      <h1 className="text-center lg:text-left leading-tight text-xl font-semibold">
        {name}
      </h1>
      <div className="ml-0 lg:ml-6 mt-6 lg:mt-3">{children}</div>
    </div>
  );
}

export {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
  SettingsSection,
};
