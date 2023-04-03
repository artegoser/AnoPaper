import { CheckBox } from "./checkbox";

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
        onClick(e);
      }}
    />
  );
}

export { SettingsCheckBox };
