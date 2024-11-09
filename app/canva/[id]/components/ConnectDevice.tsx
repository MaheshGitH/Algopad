import React from "react";
import QRCode from "react-qr-code";

interface Props {
  connect: boolean;
  id: string | string[] | undefined;
  close: (value: boolean) => void;
}

const ConnectDevice = ({ connect, id, close }: Props) => {
  return (
    <div
      className={`${
        connect ? " flex " : " hidden "
      } absolute inset-0 bg-white/35 backdrop-blur-md justify-center items-center px-2`}
    >
      <div className="flex flex-col gap-16 font-nunito text-xl relative">
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
        <button onClick={() => close(true)} className="absolute right-0 top-0">
          Close
        </button>
      </div>
    </div>
  );
};

export default ConnectDevice;
