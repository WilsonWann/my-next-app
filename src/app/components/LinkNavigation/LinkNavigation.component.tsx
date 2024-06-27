'use client'
import React, { FC } from "react";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";
import ListWithLink from "../ListWithLink/ListWithLink.component";

export type RouteDetail = {
  route: string,
  main_name: string,
  alt_name: string
  onClick?: () => void
}

const routeDetailArray: RouteDetail[] = [
  { route: '/', main_name: 'about', alt_name: '關於陌聲', onClick: () => handleScrollTo('about') },
  { route: '/service', main_name: 'service', alt_name: '服務內容' },
  { route: '/portfolio', main_name: 'portfolio', alt_name: '作品集' },
  { route: '/video', main_name: 'video', alt_name: '案例分享' },
  { route: '/contact', main_name: 'contact', alt_name: '聯絡我們' },
]

type Props = {
  menuButton?: React.ReactNode
  listClassName?: string
  linkClassName?: string
  hideLinkAltName?: boolean
};
const LinkNavigation: FC<Props> = (props) => {

  const {
    menuButton,
    listClassName = '',
    linkClassName = '',
    hideLinkAltName: hideAltName = false
  } = props

  return (
    <>
      {menuButton}
      {routeDetailArray.map((routeDetail, index) =>
        <ListWithLink
          key={index}
          routeDetail={routeDetail}
          listClassName={listClassName}
          linkClassName={linkClassName}
          hideAltName={hideAltName}
        />
      )}
    </>
  );
};

export default LinkNavigation;


