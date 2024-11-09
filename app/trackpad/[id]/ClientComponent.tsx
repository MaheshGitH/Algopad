"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import socketClient from "../../socket";

const ClientComponent = () => {
  const params = useParams();

  const [fullScreen, setFullScreen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setCoordinates({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    socketClient.emit("coordinates", {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    setCoordinates({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    socketClient.emit("coordinates", {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.changedTouches[0];
    if (touch) {
      setCoordinates({ x: touch.clientX, y: touch.clientY });
      socketClient.emit("coordinates", {
        x: touch.clientX,
        y: touch.clientY,
      });
    }
  }

  function handleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  }

  useEffect(() => {
    socketClient.emit("roomId", params.id);
    socketClient.emit("ping");
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
      <button
        onClick={handleFullscreen}
        className="absolute top-3 right-4 text-white"
      >
        {fullScreen ? "Exit-full screen" : "Full screen"}
      </button>
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
