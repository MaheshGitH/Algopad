import React, { useEffect, useRef, useState } from "react";
import { TwoNumbers } from "@/app/types";
import socketClient from "@/app/socket";

const Canva = () => {
  const [currentPos, setCurrentPos] = useState<TwoNumbers>({ x: 10, y: 10 });
  const [lastPos, setLastPos] = useState<TwoNumbers | null>(null);
  const [draw, setDraw] = useState(false);
  const canvaRef = useRef<HTMLCanvasElement>(null);

  const draws = () => {
    const canvas = canvaRef?.current;
    const context = canvas?.getContext("2d");

    if (canvas && context && lastPos && currentPos) {
      context.strokeStyle = "white";
      context.lineWidth = 2;
      context.lineCap = "round";

      context.beginPath();

      context.moveTo(lastPos.x, lastPos.y);
      context.lineTo(currentPos.x, currentPos.y);
      context.stroke();
    }
  };
  useEffect(() => {
    const animate = () => {
      if (draw) {
        draws();
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [currentPos, lastPos]);

  useEffect(() => {
    const canvaWidth = window.innerWidth - 10;
    const canvaHeight = window.innerHeight - 10;
    if (canvaRef.current) {
      canvaRef.current.height = canvaHeight;
      canvaRef.current.width = canvaWidth;
    }
    socketClient.on("move", (cor) => {
      setCurrentPos((previous) => {
        const x = previous.x + cor.x;
        const y = previous.y + cor.y;

        if (x < 0 || y < 0 || x > canvaWidth || y > canvaHeight)
          return { x: previous.x, y: previous.y };

        return { x: previous.x + cor.x, y: previous.y + cor.y };
      });
    });

    socketClient.on("fingers", (finger) => {
      if (finger === 2) {
        setDraw((prev) => !prev);
      }
    });
  }, []);

  useEffect(() => {
    setLastPos(currentPos);
  }, [currentPos]);
  return (
    <>
      <canvas
        ref={canvaRef}
        className="border-primaryLinted border rounded-lg size-full"
      />
      <span
        style={{ left: currentPos.x, top: currentPos.y }}
        className="bg-white size-1 rounded-md absolute"
      ></span>
      <span className="absolute top-0 left-1/2">{draw ? "Draw" : "Move"}</span>
    </>
  );
};

export default Canva;
