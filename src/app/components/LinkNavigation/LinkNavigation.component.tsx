'use client'
import React from "react";
import Link from "next/link";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";

const LinkNavigation = () => {

  return (
    <>
      <li>
        <Link href="/" onClick={() => handleScrollTo("about")}>ABOUT</Link>
      </li>
      <li>
        <Link href="/service">SERVICE</Link>
      </li>
      <li>
        <Link href="/portfolio">PORTFOLIO</Link>
      </li>
      <li>
        <Link href="/video">VIDEO</Link>
      </li>
      <li>
        <Link href="/contact">CONTACT</Link>
      </li>
    </>
  );
};

export default LinkNavigation;
