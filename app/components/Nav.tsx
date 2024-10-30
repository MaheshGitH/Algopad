"use client";

import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLImageElement>(null);

  let timerID: any;
  const modalStateToggle = () => {
    if (isOpen) {
      setAnimation(false);
      timerID = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    } else {
      setIsOpen(true);
      setAnimation(true);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && menuRef.current)
        if (
          !modalRef.current.contains(event.target as Node) &&
          !menuRef.current.contains(event.target as Node)
        ) {
          modalStateToggle();
        }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timerID);
    };
  }, [isOpen]);
  return (
    <>
      <div className="-mb-40 hidden md:block w-full max-w-7xl mx-auto border-b border-primaryLinted">
        <span className="flex items-center gap-2 mt-8 mb-2 ml-4 font-laila font-medium">
          <img className="~size-10/12" src="coloredLogo.svg" alt="App logo" />
          <p className="~text-lg/xl">Algopad</p>
        </span>
      </div>
      <div className="pt-4 flex justify-center items-center w-full sticky top-0 px-4">
        <nav className="flex items-center justify-between bg-gradient rounded-full px-8 py-4 shadow-nav max-w-2xl w-full md:w-fit relative backdrop-blur-xl">
          <span className="flex items-center gap-2 font-laila font-medium md:hidden">
            <img className="size-10" src="whiteLogo.svg" alt="App logo" />
            <p className="hidden sm:block">Algopad</p>
          </span>
          <ul className="hidden gap-4 font-nunito ~text-base/lg text-nowrap md:flex">
            <li>
              <a href="#features" className="hover:text-white/65 duration-150">
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-white/65 duration-150"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#demo-account"
                className="hover:text-white/65 duration-150"
              >
                Demo account
              </a>
            </li>
          </ul>
          <img
            ref={menuRef}
            onClick={modalStateToggle}
            className="cursor-pointer size-8 md:hidden"
            src="menu.svg"
            alt="menu"
          />

          {isOpen && (
            <div
              ref={modalRef}
              className={`absolute top-20 right-0 flex flex-col bg-gradient items-start px-8 py-4 rounded-2xl gap-4 font-nunito text-nowrap md:hidden text-base ${
                animation ? " scale-100 " : " scale-90 "
              } duration-500 `}
            >
              <button>Features</button>
              <button>How it works</button>
              <button>Demo account</button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Nav;
