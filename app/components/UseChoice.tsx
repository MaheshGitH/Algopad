"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const UseChoice = () => {
  const searchParam = useSearchParams();

  if (searchParam.get("device") === "choose") {
    return (
      <div className="absolute inset-0 bg-white/35 backdrop-blur-md flex justify-center items-center px-2 text-white">
        <div className="flex flex-col gap-28 font-laila ~text-lg/3xl w-full max-w-4xl">
          <p>Use this device as</p>

          <div className="flex flex-col gap-1 w-full ~text-lg/2xl font-nunito">
            <Link
              href="/canva"
              className="rounded-t-2xl ~py-8/10 bg-white/10 hover:bg-white/30 duration-200 text-center"
            >
              Canva
            </Link>
            <Link
              href="/trackpad"
              className="rounded-b-2xl ~py-8/10 bg-white/10 hover:bg-white/30 duration-200 text-center"
            >
              Trackpad
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UseChoice;
