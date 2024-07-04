"use client";

import React from "react";
import { scheherazade } from "@/app/fonts";
import Logo from "../Logo/Logo.component";
import LinkNavigation from "../LinkNavigation/LinkNavigation.component";
import HamburgerMenuIcon from "../Hamburger-Icon/Hamburger-Icon.component";
import CloseIcon from "../Close-Icon/Close-Icon.component";
import useMenu from "@/hook/useMenu";
import usePreventScroll from "@/hook/usePreventScroll";
import useCloseMenuOnClickOutside from "@/hook/useCloseMenuOnClickOutside";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu()

  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  usePreventScroll(isMenuOpen)

  const { navRef } = useCloseMenuOnClickOutside(isMenuOpen, setIsMenuOpen)

  const navigationClassName = isMenuOpen ? "right-0" : "-right-2/3"

  return (
    <header className="fixed top-0 z-50 flex h-[100px] w-full flex-row items-center justify-between bg-primary-foreground bg-opacity-65 md:px-16 px-6 xl:h-16">
      <Logo className="h-full py-8 md:py-6 xl:py-4" imageClassName={"h-full"} />
      <button title="open button" className="md:hidden md:font-normal font-bold">
        <HamburgerMenuIcon onClick={toggleIsMenuOpen} className="size-6" />
      </button>
      <ul
        ref={navRef}
        className={`${scheherazade.className} fixed md:relative md:right-0 ${navigationClassName} flex h-screen w-2/3 flex-col items-baseline justify-start gap-0 self-start bg-white opacity-100 *:w-full *:border-b *:border-slate-400 *:px-8 md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:gap-8 md:self-center md:bg-transparent md:*:border-b-transparent md:*:pl-0`}
      >
        <LinkNavigation
          menuButton={
            <li className="px-6 flex h-[100px] items-center justify-end border-b !pl-0 md:hidden">
              <button title="close button">
                <CloseIcon onClick={toggleIsMenuOpen} className="size-6" />
              </button>
            </li>
          }
          listClassName={"md:bg-transparent bg-slate-50"}
          linkClassName={`hover:text-secondary md:h-auto h-10 block leading-10 
                md:translate-y-[2px]  md:hover:-translate-y-[37px] 
                md:justify-center justify-between md:link-transition`}
        />
      </ul>
    </header>
  );
};

export default Header;
