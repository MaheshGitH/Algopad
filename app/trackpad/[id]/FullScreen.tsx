import React, { useState } from "react";

const FullScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);

  function handleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  }
  return (
    <button
      onClick={handleFullscreen}
      className="absolute top-3 right-4 text-white"
    >
      {fullScreen ? "Exit-full screen" : "Full screen"}
    </button>
  );
};

export default FullScreen;
