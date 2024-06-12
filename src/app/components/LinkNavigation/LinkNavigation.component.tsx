'use client'
import React, { FC } from "react";
import Link from "next/link";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";

type Props = {
  menuButton?: React.ReactNode
};
const LinkNavigation: FC<Props> = ({ menuButton }) => {

  return (
    <>
      {menuButton}
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
