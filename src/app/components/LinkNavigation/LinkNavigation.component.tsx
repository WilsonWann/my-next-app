import React from "react";
import Link from "next/link";

const LinkNavigation = () => {
  return (
    <>
      <Link href="/about">ABOUT</Link>
      <Link href="/service">SERVICE</Link>
      <Link href="/portfolio">PORTFOLIO</Link>
      <Link href="/video">VIDEO</Link>
      <Link href="/contact">CONTACT</Link>
    </>
  );
};

export default LinkNavigation;
