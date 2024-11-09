"use client";

import React, { useState } from "react";

const ClientInput = () => {
  const [inputValue, setIntputValue] = useState("");

  return (
    <div className="max-w-lg w-full rounded-lg pl-2 py-2 bg-dark border-2 border-primaryLinted duration-200 font-nunito text-lg outline-none relative focus-within:border-primary">
      <input
        className="bg-transparent w-full outline-none"
        id="trackpad"
        type="text"
        maxLength={10}
        onChange={(e) => {
          setIntputValue(e.currentTarget.value);
        }}
      />
      <a
        className="absolute right-0 top-0 bottom-0 rounded-tr-md rounded-br-md content-center px-4 border-l border-primaryLinted hover:bg-white/10 duration-150"
        href={`http://localhost:3000/trackpad/${inputValue}`}
      >
        Connect
      </a>
    </div>
  );
};

export default ClientInput;
