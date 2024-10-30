import React from "react";
import QRCode from "react-qr-code";

const ConnectDevice = () => {
  return (
    <div className="absolute inset-0 bg-white/35 backdrop-blur-md flex justify-center items-center px-2">
      <div className="flex flex-col gap-16 font-nunito text-xl">
        <QRCode
          bgColor="none"
          className="sm:size-72 rounded-2xl mx-auto border-2 p-4 border-black"
          value="dd"
        />
        <div className="flex justify-between gap-32 items-center">
          <span className="bg-primary w-full h-1 rounded-full" />
          <p>Or</p>
          <span className="bg-primary w-full h-1 rounded-full" />
        </div>
        <p className="">
          Type the URL into your mobile browser to connect your phone:{" "}
          <span className="font-laila bg-black px-1">
            http://algopad.com/websocket
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConnectDevice;
