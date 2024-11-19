import React from "react";
import Canva from "./Canva";

const CanvaArea = () => {
  return (
    <div className="flex-grow bg-dark -z-10 relative overflow-hidden">
      <Canva />
    </div>
  );
};

export default CanvaArea;
