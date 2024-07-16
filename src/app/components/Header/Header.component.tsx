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
import { cn } from "@/lib/utils"

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu()

  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  usePreventScroll(isMenuOpen)

  const { navRef } = useCloseMenuOnClickOutside(isMenuOpen, setIsMenuOpen)

  return (
    <header className="fixed top-0 z-50 flex xl:h-16 h-[100px] w-full flex-row items-center justify-between bg-primary-foreground bg-opacity-65 md:px-16 px-6">
      <Logo className="h-full py-8 md:py-6 xl:py-4" imageClassName={"h-full"} />
      <button title="open button" className="md:hidden md:font-normal font-bold">
        <HamburgerMenuIcon onClick={toggleIsMenuOpen} className="size-6" />
      </button>

      <ul
        ref={navRef}
        className={cn(`
          fixed
          md:relative 
          md:right-0
          top-0
          flex 
          md:flex-row flex-col 
          md:justify-center justify-start
          md:items-center items-baseline
          xl:gap-20 md:gap-10 gap-0 
          
          md:h-auto h-screen
          md:w-auto w-2/3 
        
          md:bg-transparent bg-white       
          
          md:*:border-b-transparent 
          md:*:pl-0
          *:w-full 
          *:border-b 
          *:border-slate-400
          `
          ,
          scheherazade.className,
          { "right-0": isMenuOpen, "-right-2/3": !isMenuOpen })}
      >
        <LinkNavigation
          menuButton={
            <li className="px-6 flex h-[100px] items-center justify-end border-b !pl-0 md:hidden">
              <button title="close button">
                <CloseIcon onClick={toggleIsMenuOpen} className="size-6" />
              </button>
            </li>
          }
          listClassName={"md:bg-transparent bg-slate-50 border-b"}
          linkClassName={`hover:text-secondary md:h-auto h-10 block leading-10 md:p-0 px-6
                md:translate-y-[2px] md:hover:-translate-y-[37px] 
                md:justify-center justify-between md:link-transition`}
          header
        />
      </ul>
    </header >
  );
};

export default Header;
