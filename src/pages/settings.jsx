import { SettingsCheckBox } from "../components/settingsInputs";
function Settings() {
  return (
    <div className="">
      <h1 className="text-center lg:text-left leading-tight text-2xl font-bold">
        Настройки
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
    </div>
  );
}

export default Settings;
