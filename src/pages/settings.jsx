import {
  SettingsCheckBox,
  SettingsTextInput,
  SettingsSelectInput,
} from "../components/settingsInputs";
function Settings() {
  return (
    <div className="">
      <h1 className="text-center lg:text-left leading-tight text-2xl font-bold">
        Настройки
      </h1>

      <h1 className="text-center lg:text-left leading-tight text-xl font-bold">
        Пользователь
      </h1>

      <SettingsTextInput
        placeholder="Имя"
        label="Имя пользователя"
        settingName="userName"
      />

      <SettingsTextInput
        placeholder="Ссылка"
        label="Ссылка на фото"
        settingName="userPhoto"
      />

      <SettingsTextInput
        placeholder="Статус"
        label="Статус пользователя"
        settingName="userStatus"
      />

      <h1 className="text-center lg:text-left leading-tight text-xl font-bold">
        Заметки
      </h1>

      <SettingsCheckBox
        label="Редактирование в предпросмотре"
        title="Может вызывать необратимые изменения текста, например ломает теги кода"
        checked={settings.editPreview}
        settingName="editPreview"
      />

      <SettingsCheckBox
        label="Публичная заметка"
        title="Если включено, то заметка будет видна всем пользователям"
        checked={settings.publicNote}
        settingName="publicNote"
      />

      <h1 className="text-center lg:text-left leading-tight text-xl font-bold">
        Интерфейс
      </h1>

      <SettingsSelectInput
        label="Язык"
        settingName="language"
        options={[
          {
            value: "ru",
            label: "Русский",
          },
          {
            value: "en",
            label: "English",
          },
        ]}
      />

      <h1 className="text-center lg:text-left leading-tight text-xl font-bold">
        Стороннее API
      </h1>

      <SettingsTextInput
        placeholder="Ключ"
        label="OpenAi API ключ"
        settingName="openAiKey"
        secret
      />
    </div>
  );
}

export default Settings;
