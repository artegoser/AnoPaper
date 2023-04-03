import { io } from "socket.io-client";

const socket = io();

function onConnect() {
  console.log("Socket connected");
}

function onDisconnect() {
  console.log("Socket disconnected, local mode only");
}

function onFooEvent() {
  console.log("bar");
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);
socket.on("foo", onFooEvent);

export default socket;
