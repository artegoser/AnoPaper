import {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
} from "../components/settingsInputs";
import { reRenderPage } from "../components/utils";
import Locales from "../localisation/main";

function Settings() {
  return (
    <div className="">
      <h1 className="text-center lg:text-left leading-tight text-2xl font-bold">
        {locals.Settings}
      </h1>

      <SettingsPlaceholder text={locals.User} />

      <SettingsTextInput
        placeholder={locals.Name}
        label={locals.UserName}
        settingName="userName"
      />

      <SettingsTextInput
        placeholder={locals.Url}
        label={locals.PhotoUrl}
        settingName="userPhoto"
      />

      <SettingsTextInput
        placeholder={locals.Status}
        label={locals.UserStatus}
        settingName="userStatus"
      />

      <SettingsPlaceholder text={locals.Notes} />

      <SettingsCheckBox
        label={locals.EditPreview}
        title={locals.EditPreviewWarn}
        checked={settings.editPreview}
        settingName="editPreview"
      />

      <SettingsCheckBox
        label={locals.PublicNote}
        title={locals.PublicNoteTitle}
        checked={settings.publicNote}
        settingName="publicNote"
      />

      <SettingsPlaceholder text={locals.Interface} />

      <SettingsSelectInput
        label={locals.Language}
        settingName="language"
        options={[
          {
            value: "ru",
            label: "Русский",
          },
          {
            value: "en",
            label: "English (US)",
          },
        ]}
        onChange={(e) => {
          window.locals =
            Locales[window.settings.language] ||
            Locales[navigator.language] ||
            Locales[navigator.userLanguage] ||
            Locales.en;

          reRenderPage();
        }}
      />

      <SettingsPlaceholder text={locals.ThirdPartyApi} />

      <SettingsTextInput
        placeholder={locals.Key}
        label={locals.OpenAiKey}
        settingName="openAiKey"
        secret
      />
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

export default Settings;
