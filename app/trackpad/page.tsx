import React, { useState } from "react";
import ClientInput from "./ClientInput";

const page = () => {
  return (
    <div className="bg-primary h-screen w-screen p-0.5 relative">
      <div className="bg-dark w-full h-full rounded-lg text-white">
        <div className="absolute inset-0 bg-white/35 backdrop-blur-md flex flex-col gap-8 justify-center items-center px-2">
          <label
            htmlFor="trackpad"
            className="cursor-pointer max-w-lg w-full font-laila ~text-lg/2xl"
          >
            Enter trackpad ID :
          </label>
          <ClientInput />
        </div>
      </div>
    </div>
  );
};

export default page;
