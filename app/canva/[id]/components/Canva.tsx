"use client";

import React, { useEffect, useState } from "react";
import ConnectDevice from "./ConnectDevice";
import TopSection from "./TopSection";
import CanvaArea from "./CanvaArea";
import socketClient from "@/app/socket";
import { useParams } from "next/navigation";

const Canva = () => {
  const id = useParams().id;
  const [connected, setConnected] = useState(false);
  const [connect, setConnect] = useState(false);
  const [fingers, setFingers] = useState(0);

  useEffect(() => {
    socketClient.connect();

    socketClient.on("fingers", (value) => {
      setFingers(value);
    });
    function handleConnection() {
      socketClient.emit("roomId", id);

      socketClient.on("count", (count) => {
        if (count === 2) {
          setConnected(true);
          setConnect(false);
        } else if (count === 1) {
          setConnected(false);
        }
      });
    }

    if (socketClient.connected) {
      handleConnection();
    } else {
      socketClient.on("connect", handleConnection);
    }

    return () => {
      socketClient.off("connect", handleConnection);
      socketClient.off("count");
    };
  }, [id]);

  return (
    <main className="text-white h-screen flex flex-col">
      <TopSection
        connect={(value) => setConnect(value)}
        isConnected={connected}
      />
      <ConnectDevice
        close={(value) => value && setConnect(false)}
        id={id}
        connect={connect}
      />
      <CanvaArea connect={connected} />
      <p className=" bg-dark">{fingers}</p>
    </main>
  );
};

export default Canva;
