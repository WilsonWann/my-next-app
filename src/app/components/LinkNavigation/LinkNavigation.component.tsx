'use client'
import React, { FC } from "react";
import Link from "next/link";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";

const routeDetailArray = [
  { route: '/', name: 'about' },
  { route: '/service', name: 'service' },
  { route: '/portfolio', name: 'portfolio' },
  { route: '/video', name: 'video' },
  { route: '/contact', name: 'contact' },
]


type Props = {
  menuButton?: React.ReactNode
  className?: string
};
const LinkNavigation: FC<Props> = ({ menuButton, className = '' }) => {

  return (
    <>
      {menuButton}
      {routeDetailArray.map((routeDetail, index) => {

        const { route, name } = routeDetail

        if (route === '/') {
          return (
            <li key={index} >
              <Link href="/" className={`uppercase ${className}`} onClick={() => handleScrollTo("about")}>{name}</Link>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <Link href={route} className={`uppercase ${className}`}>{name}</Link>
            </li >
          )
        }
      })}
    </>
  );
};

export default LinkNavigation;
