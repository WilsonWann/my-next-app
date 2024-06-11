'use client'
import React from "react";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";
import Link from "next/link";

const Logo = () => {

  return (
    <Link href="/" className="mr-auto"
      onClick={() => handleScrollTo("banner", 0)}
    >
      我是Logo
    </Link>
  );
};

export default Logo
