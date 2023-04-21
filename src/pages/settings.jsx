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

import {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
  SettingsSection,
  setSetting,
} from "../components/settingsInputs";
import { ButtonWithIcon } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { localesProcess, reRenderPage } from "../components/utils";
import { langChoices } from "../localisation/main";

function Settings() {
  let lastName = settings.userName;

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
          onChange={() => {
            if (settings.userName == "bruh") {
              lastName = settings.userName;
              reRenderPage();
            } else if (lastName == "bruh") {
              lastName = settings.userName;
              reRenderPage();
            }
          }}
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
          onClick={(e) => {
            if (e.target.checked) {
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
          options={langChoices}
          onChange={() => {
            localesProcess(true);
            setSetting("newNotes", false);
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
