import {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
  SettingsSection,
} from "../components/settingsInputs";
import { reRenderPage } from "../components/utils";
import Locales from "../localisation/main";

function Settings() {
  return (
    <div>
      <h1 className="text-center lg:text-left leading-tight text-2xl font-bold">
        {locals.Settings}
      </h1>

      <SettingsSection name={locals.User}>
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
      </SettingsSection>

      <SettingsSection name={locals.Notes}>
        <SettingsCheckBox
          label={locals.EditPreview}
          title={locals.EditPreviewWarn}
          settingName="editPreview"
        />

        <SettingsCheckBox
          label={locals.PublicNote}
          title={locals.PublicNoteTitle}
          settingName="publicNote"
        />

        <SettingsCheckBox
          label={locals.AdditionalFeatures}
          settingName="additionalFeatures"
        />
      </SettingsSection>

      <SettingsSection name={locals.Interface}>
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
      </SettingsSection>

      <SettingsSection name={locals.ThirdPartyApi}>
        <SettingsTextInput
          placeholder={locals.Key}
          label={locals.OpenAiKey}
          settingName="openAiKey"
          secret
        />
      </SettingsSection>
    </div>
  );
}

export default Settings;
