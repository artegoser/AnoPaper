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

let en = {
  about_md: (await (await fetch("localisation/en/about.md")).text()) || "",
  Notes: "Notes",
  Write: "Write",
  Chat: "Chat",
  Settings: "Settings",
  About: "About",
  Name: "Name",
  UserName: "Username",
  User: "User",
  PhotoUrl: "Photo URL",
  Url: "URL",
  Status: "Status",
  UserStatus: "User status",
  EditPreview: "Editing in preview",
  EditPreviewWarn:
    "Can cause irreversible text changes, such as breaking code tags",
  PublicNote: "Public note",
  PublicNoteTitle: "If enabled, note will be visible to all users",
  Interface: "Interface",
  Language: "Language",
  ThirdPartyApi: "Third party API",
  OpenAiKey: "OpenAI API key",
  Key: "Key",
  Preview: "Preview",
  NotePlaceholder:
    "Your note starts here. You can use markdown, MathJax and GFM.",
  NoteName: "Note name",
  Publish: "Publish",
  Save: "Save",
  WriteNote: "Write note",
  PubError: "Error in publishing note",
  PubErrorMsg: "Note was not published due to an unknown error",
  PubErrorMsgNoName: "Note was not published, because it does not have a name.",
  PubErrorMsgNoText: "Note was not published, because it does not have a text.",
  Back: "Back",
  PubNoteNotExist: "This note does not exist",
  NoteNotExist: "This note does not exist",
  Idontexists: "I don't exist",
  PubUrlPlaceholder:
    "The link to send a public note. When you click this link, the note will disappear from the server and be saved locally.",
  Delete: "Delete",
  Open: "Open",
  NoNotesYet: "No notes yet",
  AIComplete: "Continue Note (AI)",
  AdditionalFeatures: "Additional features",
  CollabEdit: "Collaborative editing",
  Password: "Password",
  SyncPassword: "Sync password",
  CollabEditPassword: "Password for collaborative editing",
  BroadcastSync: "Getting notes, settings from another device",
  SyncAll: "Send data to all devices",
  Sync: "Sync",
  Search: "Search",
  NoNotesFound: "No notes found",
  LocalNote: "Local",
  PublicNote: "Public",
  Menu: "Menu",
};

export default en;
