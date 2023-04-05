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
