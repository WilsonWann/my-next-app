'use client'
import React from "react";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";

const Logo = () => {

  return (
    <button className="mr-auto" onClick={() => handleScrollTo("banner", 0)}>
      我是Logo
    </button>
  );
};

export default Logo;
