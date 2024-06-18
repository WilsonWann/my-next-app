"use client";

import React, { useEffect, useRef, useState } from "react";
import { scheherazade } from "@/app/fonts";
import Logo from "../Logo/Logo.component";
import LinkNavigation from "../LinkNavigation/LinkNavigation.component";
import HamburgerMenuIcon from "../Hamburger-Icon/Hamburger-Icon.component";
import CloseIcon from "../Close-Icon/Close-Icon.component";
import { selectIsMenuOpen } from "@/store/menu/menu.selector";
import { setIsMenuOpen } from "@/store/menu/menu.slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const toggleIsMenuOpen = () => dispatch(setIsMenuOpen(!isMenuOpen))

  const [navigationClassName, setNavigationClassName] = useState("-right-2/3");

  const navRef = useRef<HTMLUListElement | null>(null)

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      dispatch(setIsMenuOpen(false));
    }
  }
  useEffect(() => {
    dispatch(setIsMenuOpen(false))
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('wheel', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('wheel', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
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

  useEffect(() => {

  }, []);

  return (
    <header className="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-theme-light px-16 
    bg-opacity-65 
    xl:h-16 h-[100px] 
    ">
      <Logo className="xl:py-4 md:py-6 py-8 h-full" />
      <button className="md:hidden">
        <HamburgerMenuIcon onClick={toggleIsMenuOpen} />
      </button>
      <ul ref={navRef} className={`
      ${scheherazade.className}
      fixed md:relative 
      md:right-0 ${navigationClassName} 
      flex 
      md:h-auto h-screen  
      md:w-auto w-2/3 
      md:flex-row flex-col items-baseline justify-start 
      self-start 
      md:*:pl-0 *:pl-[13.3%]  
      md:items-center 
      md:justify-center 
      xl:gap-16 md:gap-8 gap-16 
      md:self-center 
      md:bg-transparent bg-white opacity-100
      md:*:border-b-transparent *:border-b *:border-slate-400
      *:w-full 
      `}
      >
        <LinkNavigation
          menuButton={
            <li className="h-[100px] flex justify-center items-center md:hidden !pl-0 !border-b-transparent ">
              <button>
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
