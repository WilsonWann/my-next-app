'use client'
import React from "react";
import Link from "next/link";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";

const LinkNavigation = () => {

  return (
    <>
      <Link href="/" onClick={() => handleScrollTo("about")}>ABOUT</Link>
      <Link href="/service">SERVICE</Link>
      <Link href="/portfolio">PORTFOLIO</Link>
      <Link href="/video">VIDEO</Link>
      <Link href="/contact">CONTACT</Link>
    </>
  );
};

export default LinkNavigation;
