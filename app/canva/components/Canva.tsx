"use client";

import React, { useEffect, useState } from "react";
import ConnectDevice from "./ConnectDevice";
import TopSection from "./TopSection";

const Canva = () => {
  return (
    <main className="bg-dark h-screen w-screen text-white">
      <TopSection />
      <ConnectDevice />
    </main>
  );
};

export default Canva;
