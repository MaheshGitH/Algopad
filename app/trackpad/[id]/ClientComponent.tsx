"use client";

import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import socketClient from "../../socket";
import FullScreen from "./FullScreen";

const ClientComponent = () => {
  const params = useParams();

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    socketClient.emit("coordinates", {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });

    socketClient.emit("fingers", e.touches.length);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    socketClient.emit("coordinates", {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.changedTouches[0];
    if (touch) {
      socketClient.emit("coordinates", {
        x: touch.clientX,
        y: touch.clientY,
      });
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    socketClient.connect();
    socketClient.emit("roomId", params.id);

    const deviceHeight = window.screen.height;
    const deviceWeight = window.screen.width;
    window
      .matchMedia("(orientation: portrait)")
      .addEventListener("change", (e) => {
        const portrait = e.matches;
        socketClient.emit("orientation", portrait);
      });

    socketClient.emit("dimension", deviceHeight, deviceWeight);

    return () => {
      socketClient.close();
    };
  }, []);

  return (
    <div className="bg-primary p-0.5 absolute inset-0">
      <FullScreen />{" "}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="bg-dark w-full h-full rounded-lg"
      ></div>
    </div>
  );
};

export default ClientComponent;
