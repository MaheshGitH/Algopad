"use client";

import { io } from "socket.io-client";

const socketClient = io("http://localhost:3000");

export default socketClient;
