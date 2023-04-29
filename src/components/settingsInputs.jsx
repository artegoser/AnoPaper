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
/* eslint-disable react-refresh/only-export-components */
import { CheckBox } from "./checkbox";
import { inputStyle, settingsAddInput } from "./styles";
import { ButtonWithIcon } from "./button";
import { Complete } from "../components/openai";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

function SettingsCheckBox({ label, title, className, settingName, onClick }) {
  return (
    <CheckBox
      label={label}
      title={title}
      checked={settings[settingName]}
      className={className}
      onClick={(e) => {
        !!settingName && setSetting(settingName, e.target.checked);
        !!onClick && onClick(e);
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
          !!settingName && setSetting(settingName, e.target.value);
          !!onChange && onChange(e);
        }}
      />
    </div>
  );
}

function setSetting(settingName, value) {
  window.settings[settingName] = value;
  localStorage.setObj("settings", window.settings);
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
          !!settingName && setSetting(settingName, e.target.value);
          !!onChange && onChange(e);
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

function NoteNameInput({ value, onChange, preview = false }) {
  return (
    <input
      type="text"
      className={`mb-2 md:w-1/6 w-full ${inputStyle} ${
        preview ? "hidden" : ""
      }`}
      placeholder={locals.NoteName}
      maxLength={64}
      defaultValue={value}
      onChange={onChange}
    />
  );
}

function NoteTextArea({ value, onChange, preview = false }) {
  return (
    <textarea
      className={`
    ${inputStyle}
    w-full
    ${preview ? "hidden" : ""}
  `}
      rows="10"
      placeholder={locals.NotePlaceholder}
      maxLength={5000}
      onChange={onChange}
      defaultValue={value}
      id="noteTextArea"
    ></textarea>
  );
}

function NotesAdditionalSettings({
  noteText = localStorage.getItem("NoteText"),
  onClick,
}) {
  return (
    <>
      {settings.additionalFeatures && (
        <div className="justify-self-start lg:justify-self-start">
          <SettingsSection name={locals.AdditionalFeatures}>
            {!!settings.openAiKey && (
              <ButtonWithIcon
                icon={DocumentTextIcon}
                text={locals.AIComplete}
                className="m-1"
                w="w-full"
                onClick={async () => {
                  let text = await Complete(noteText);
                  document.getElementById("noteTextArea").value = text;

                  onClick(text);
                }}
              />
            )}
            <SettingsCheckBox
              label={locals.CollabEdit}
              settingName="CollabEdit"
            />
          </SettingsSection>
        </div>
      )}
    </>
  );
}

export {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
  SettingsSection,
  setSetting,
  NoteNameInput,
  NoteTextArea,
  NotesAdditionalSettings,
};
