import socketClient from "@/app/socket";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  connect: boolean;
}

const CanvaArea = ({ connect }: Props) => {
  const [dimension, setDimension] = useState({ height: 0, width: 0 });
  const [isPortrait, setIsPortrait] = useState<boolean>();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentPos, setCurrentPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    socketClient.on("dimension", (w, h) => {
      setDimension({ height: h, width: w });
    });

    socketClient.on("orientation", (portrait) => {
      setIsPortrait(portrait);
    });

    socketClient.on("coordinates", (pos) => {
      setLastPos(currentPos);
      setCurrentPos(pos);
    });

    return () => {
      socketClient.off("coordinates");
      socketClient.off("dimension");
      socketClient.off("orientation");
    };
  }, [currentPos]);

  useEffect(() => {
    if (!connect) {
      setDimension({ height: 0, width: 0 });
    }
  }, [connect]);

  const draw = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context && lastPos && currentPos) {
      context.strokeStyle = "white";
      context.lineWidth = 2;
      context.lineCap = "round";

      context.beginPath();
      context.moveTo(lastPos.x, lastPos.y);
      context.lineTo(currentPos.x, currentPos.y);
      context.stroke();

      setLastPos(currentPos);
    }
  };

  useEffect(() => {
    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [lastPos, currentPos]);

  return (
    <div className="flex-grow bg-dark -z-10 relative">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div
        style={{
          width: isPortrait ? dimension.height : dimension.width,
          height: isPortrait ? dimension.width : dimension.height,
        }}
        className="absolute border border-primary bg-white size-8"
      ></div>
    </div>
  );
};

export default CanvaArea;
