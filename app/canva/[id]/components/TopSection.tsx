import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  isConnected: boolean;
  connect: (value: boolean) => void;
}

const TopSection = ({ isConnected, connect }: Props) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (isConnected) return;
    setHide(false);
  }, [isConnected]);
  return (
    <div
      className={`${
        hide ? " hidden " : " flex "
      } items-center gap-2 bg-black py-4 ~px-4/12 font-laila font-medium border-b border-primary`}
    >
      <Image width={32} height={32} src="/coloredlogo.svg" alt="App logo" />

      <p className="~text-lg/xl">Algopad</p>
      <div className="font-nunito text-base ml-auto flex gap-8">
        <button disabled={!isConnected} onClick={() => setHide(true)}>
          Hide
        </button>

        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 "></span>
            <span className="relative inline-flex rounded-full size-3  bg-primary"></span>
          </span>

          <button disabled={isConnected} onClick={() => connect(true)}>
            {isConnected ? "Device connected" : "Not connected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
