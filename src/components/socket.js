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

import { io } from "socket.io-client";
import { reRenderPage } from "./utils";

const socket = io();

function onConnect() {
  console.log("Socket connected");
}

function onDisconnect() {
  console.log("Socket disconnected, local mode only");
  window.alreadyConnected = false;
}

function onFooEvent() {
  console.log("bar");
}

function onSync({ settings, Notes, NoteText, NoteName }) {
  localStorage.setItem("Notes", Notes);
  localStorage.setItem("NoteText", NoteText);
  localStorage.setItem("NoteName", NoteName);
  localStorage.setItem("settings", settings);
  reRenderPage();
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);
socket.on("foo", onFooEvent);
socket.on("broadcastSync", onSync);

export default socket;
