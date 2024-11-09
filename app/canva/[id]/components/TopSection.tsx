import React from "react";

interface Props {
  isConnected: boolean;
  connect: (value: boolean) => void;
}

const TopSection = ({ isConnected, connect }: Props) => {
  return (
    <div className="flex items-center gap-2 bg-black py-4 ~px-4/12 font-laila font-medium border-b border-primary">
      <img className="~size-6/8" src="/coloredLogo.svg" alt="App logo" />
      <p className="~text-lg/xl">Algopad</p>
      <div className="font-nunito text-base ml-auto flex gap-8">
        <span className="hidden sm:block">22:12:33</span>
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
