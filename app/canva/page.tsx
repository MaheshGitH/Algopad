import React from "react";
import Canva from "./components/Canva";
import TopSection from "./components/TopSection";

const page = () => {
  return (
    <main className="bg-dark h-screen w-screen text-white">
      <TopSection></TopSection>
      <Canva />
    </main>
  );
};

export default page;
