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

import Locale from "../locales.interface";

const ru: Locale = {
  Notes: "Заметки",
  Write: "Написать",
  Chat: "Чат",
  Settings: "Настройки",
  About: "Подробнее",
  Name: "Имя",
  UserName: "Имя пользователя",
  User: "Пользователь",
  PhotoUrl: "Ссылка на фото",
  Url: "Ссылка",
  Status: "Статус",
  UserStatus: "Статус пользователя",
  EditPreview: "Редактирование в предпросмотре",
  EditPreviewWarn:
    "Может вызывать необратимые изменения текста, например ломает теги кода",
  PublicNote: "Публичная заметка",
  PublicNoteTitle: "Если включено, то заметка будет видна всем пользователям",
  Interface: "Интерфейс",
  Language: "Язык",
  ThirdPartyApi: "Сторонний API",
  OpenAiKey: "OpenAI API ключ",
  Key: "Ключ",
  Preview: "Предпросмотр",
  NotePlaceholder:
    "Ваша заметка начинается здесь. Вы можете использовать markdown, MathJax и GFM.",
  NoteName: "Название заметки",
  Publish: "Опубликовать",
  Save: "Сохранить",
  WriteNote: "Написать заметку",
  PubError: "Ошибка в публикации заметки",
  PubErrorMsg: "Заметка не была опубликована из-за неизвестной ошибки",
  PubErrorMsgNoName:
    "Заметка не была опубликована, так как отсутствует название.",
  PubErrorMsgNoText: "Заметка не была опубликована, так как отсутствует текст.",
  Back: "Назад",
  PubNoteNotExist: "Такой публичной заметки не существует",
  NoteNotExist: "Заметки не существует",
  Idontexists: "Меня не существует",
  PubUrlPlaceholder:
    "Ссылка для отправки публичной заметки. При переходе на эту ссылку, заметка исчезнет с сервера и будет сохранена локально.",
  Delete: "Удалить",
  Open: "Открыть",
  NoNotesYet: "Заметок пока нет",
  AIComplete: "Продолжить заметку (ИИ)",
  AdditionalFeatures: "Дополнительные функции",
  CollabEdit: "Совместное редактирование",
  Password: "Пароль",
  CollabEditPassword: "Пароль для совместного редактирования",
  SyncPassword: "Пароль для синхронизации",
  BroadcastSync: "Получение заметок, настроек с другого устройства",
  SyncAll: "Отправить данные",
  Sync: "Синхронизация",
  Search: "Поиск",
  NoNotesFound: "Заметок не найдено",
  LocalNote: "Локальная",
  Menu: "Меню",
  SourceCode: "Исходный код",
  Edit: "Изменить",
};

export default ru;
