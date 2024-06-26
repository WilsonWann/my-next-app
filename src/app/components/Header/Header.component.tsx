"use client";

import React, { useEffect, useRef, useState } from "react";
import { scheherazade } from "@/app/fonts";
import Logo from "../Logo/Logo.component";
import LinkNavigation from "../LinkNavigation/LinkNavigation.component";
import HamburgerMenuIcon from "../Hamburger-Icon/Hamburger-Icon.component";
import CloseIcon from "../Close-Icon/Close-Icon.component";
import useMenu from "@/hook/useMenu";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu()

  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  const [navigationClassName, setNavigationClassName] = useState("-right-2/3");

  const navRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("wheel", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("wheel", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setNavigationClassName("right-0");
    } else {
      setNavigationClassName("-right-2/3");
    }
  }, [isMenuOpen]);

  useEffect(() => {}, []);

  return (
    <header className="fixed top-0 z-50 flex h-[100px] w-full flex-row items-center justify-between bg-theme-light bg-opacity-65 px-16 xl:h-16">
      <Logo className="h-full py-8 md:py-6 xl:py-4" imageClassName={"h-full"} />
      <button title="open button" className="md:hidden">
        <HamburgerMenuIcon onClick={toggleIsMenuOpen} />
      </button>
      <ul
        ref={navRef}
        className={` ${scheherazade.className} fixed md:relative md:right-0 ${navigationClassName} flex h-screen w-2/3 flex-col items-baseline justify-start gap-16 self-start bg-white opacity-100 *:w-full *:border-b *:border-slate-400 *:pl-[13.3%] md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:gap-8 md:self-center md:bg-transparent md:*:border-b-transparent md:*:pl-0 xl:gap-16`}
      >
        <LinkNavigation
          menuButton={
            <li className="flex h-[100px] items-center justify-center !border-b-transparent !pl-0 md:hidden">
              <button title="close button">
                <CloseIcon onClick={toggleIsMenuOpen} />
              </button>
            </li>
          }
          className={"hover:text-title"}
        />
      </ul>
    </header>
  );
};

export default Header;
