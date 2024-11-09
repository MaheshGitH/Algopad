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

  useEffect(() => {
    socketClient.emit("roomId", id);
    socketClient.emit("ping", "ping");
    socketClient.on("count", (count) => {
      if (count === 2) {
        setConnected(true);

        setConnect(false);
      }

      setConnect(false);

      if (count === 1) setConnected(false);
    });

    return () => {
      socketClient.close();
      socketClient.off("count");
    };
  }, []);

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
    </main>
  );
};

export default Canva;
