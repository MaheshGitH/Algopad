"use client";

import socketClient from "../../socket";
import generateUniqueId from "generate-unique-id";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const ConnectDevice = () => {
  const [id, setId] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const uniqueId = generateUniqueId({
      length: 10,
    });

    setId(uniqueId);

    socketClient.emit("roomId", uniqueId);

    socketClient.on("roomfull", (arg) => {
      if (arg === "ping") {
        router.push(`http://localhost:3000/canva/${uniqueId}`);
      }
    });
    return () => {
      socketClient.off("deviceConnected");
      socketClient.close();
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-white/35 backdrop-blur-md flex justify-center items-center px-2">
      <div className="flex flex-col gap-16 font-nunito text-xl">
        <QRCode
          bgColor="none"
          className="sm:size-72 rounded-2xl mx-auto border-2 p-4 border-black"
          value={`http://192.168.29.100:3000/trackpad/${id}`}
        />
        <div className="flex justify-between gap-32 items-center">
          <span className="bg-primary w-full h-1 rounded-full" />
          <p>Or</p>
          <span className="bg-primary w-full h-1 rounded-full" />
        </div>
        <p>
          Type the URL into your mobile browser to connect your phone:{" "}
          <span className="font-laila bg-black px-1">
            {`http://localhost:3000/trackpad/${id}`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConnectDevice;
