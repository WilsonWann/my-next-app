'use client'
import React, { FC } from "react";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";
import Link from "next/link";

type Props = {
  className?: string
}

const Logo: FC<Props> = ({ className }) => {

  return (
    <Link className={className} href="/" onClick={() => handleScrollTo("banner", 0)}>
      我是Logo
    </Link>
  );
};

export default Logo
