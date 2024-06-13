'use client'
import React, { FC } from "react";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/logo_gray.png'

type Props = {
  className?: string
  imageClassName?: string
}

const Logo: FC<Props> = ({ className = "", imageClassName = "" }) => {

  const logoProps = {
    src: logo,
    placeholder: "blur" as const,
    blurDataURL: logo.blurDataURL,
    alt: "",
    sizes: "100vw",
  }

  return (
    <Link className={className} href="/" onClick={() => handleScrollTo("banner", 0)}>
      <div className="h-full aspect-logo overflow-clip">
        <Image {...logoProps}
          className={`object-top object-cover ${imageClassName}`}
        />
      </div>
    </Link>
  );
};

export default Logo
