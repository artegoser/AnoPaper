import {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
  SettingsSection,
} from "../components/settingsInputs";
import { reRenderPage } from "../components/utils";
import Locales from "../localisation/main";
import { ButtonWithIcon } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

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

        <SettingsCheckBox label={locals.CollabEdit} settingName="CollabEdit" />

        <SettingsTextInput
          placeholder={locals.Password}
          label={locals.CollabEditPassword}
          settingName="CollabEditPassword"
          onChange={() => {
            window.alreadyConnected = false;
          }}
        />
      </SettingsSection>

      <SettingsSection name={locals.Sync}>
        <SettingsCheckBox
          label={locals.BroadcastSync}
          onChange={(e) => {
            if (e.target.checked) {
              console.log("Broadcasting sync");
              socket.emit("joinRoom", settings.SyncPassword);
            } else {
              socket.emit("leaveRoom");
            }
          }}
        />

        <SettingsTextInput
          placeholder={locals.Password}
          label={locals.SyncPassword}
          secret
          settingName="SyncPassword"
        />

        <ButtonWithIcon
          icon={ChevronDoubleRightIcon}
          text={locals.SyncAll}
          className="m-1"
          w="w-full lg:w-96"
          onClick={() => {
            socket.emit("broadcastSync", {
              data: {
                settings: localStorage.getItem("settings"),
                Notes: localStorage.getItem("Notes"),
                NoteText: localStorage.getItem("NoteText"),
                NoteName: localStorage.getItem("NoteName"),
              },
              room: settings.SyncPassword,
            });
          }}
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
