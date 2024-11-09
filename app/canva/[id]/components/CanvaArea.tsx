import socketClient from "@/app/socket";
import React, { useEffect, useState } from "react";

interface Props {
  connect: boolean;
}

const CanvaArea = ({ connect }: Props) => {
  const [xAndy, setxAndy] = useState({ x: 0, y: 0 });
  const [dimension, setDimension] = useState({ height: 0, width: 0 });
  const [isPortrait, setIsPortrait] = useState<boolean>();

  useEffect(() => {
    socketClient.on("coordinates", (pos) => {
      setxAndy(pos);
    });

    socketClient.on("dimension", (w, h) => {
      setDimension({ height: h, width: w });
    });

    socketClient.on("orientation", (portrait) => {
      setIsPortrait(portrait);
    });
    return () => {
      socketClient.off("coordinates");
      socketClient.off("dimension");
    };
  }, []);

  useEffect(() => {
    if (!connect) {
      setDimension({ height: 0, width: 0 });
    }
  }, [connect]);

  return (
    <div className="flex-grow bg-dark -z-10">
      <div
        style={{
          height: `${isPortrait ? dimension.width : dimension.height}px`,
          width: `${isPortrait ? dimension.height : dimension.width}px`,
        }}
        className="relative border border-primary overflow-clip rounded-lg"
      >
        <span
          style={{ top: `${xAndy.y}px`, left: `${xAndy.x}px` }}
          className="bg-white size-2 absolute"
        ></span>
      </div>
    </div>
  );
};

export default CanvaArea;
