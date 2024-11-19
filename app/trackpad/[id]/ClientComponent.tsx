"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import socketClient from "../../socket";
import FullScreen from "./FullScreen";
import { TwoNumbers } from "@/app/types";

const ClientComponent = () => {
  const params = useParams();
  const [currentPos, setCurrentPos] = useState<TwoNumbers>({ x: 0, y: 0 });
  const [previousPos, setPreviousPos] = useState<TwoNumbers>({ x: 0, y: 0 });
  const [draw, setDraw] = useState(false);

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    socketClient.emit("fingers", e.touches.length);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;

    setCurrentPos({ x: clientX, y: clientY });

    if (previousPos.x !== 0 && previousPos.y !== 0) {
      const x = currentPos.x - previousPos.x;
      const y = currentPos.y - previousPos.y;

      socketClient.emit("move", {
        x,
        y,
      });
    }

    setPreviousPos(currentPos);
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    setCurrentPos({ x: 0, y: 0 });

    setPreviousPos({ x: 0, y: 0 });
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    socketClient.connect();
    socketClient.emit("roomId", params.id);

    return () => {
      socketClient.close();
      socketClient.disconnect();
    };
  }, []);

  const handleClick = () => {
    socketClient.emit("draw", draw);
    setDraw((prev) => !prev);
  };

  return (
    <div className="bg-primary p-0.5 absolute inset-0 text-white">
      <FullScreen />{" "}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="bg-dark w-full h-full rounded-lg"
      ></div>
      <button onClick={handleClick} className="absolute top-3 left-3">
        {draw ? "Move" : "Draw"}
      </button>
    </div>
  );
};

export default ClientComponent;
