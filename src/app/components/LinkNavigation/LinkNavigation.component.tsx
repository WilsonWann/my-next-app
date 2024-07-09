'use client'
import React, { FC } from "react";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";
import ListWithLink from "../ListWithLink/ListWithLink.component";
import { RouteDetail } from "@/types";

const routes: RouteDetail[] = [
  { route: '/', mainName: 'about', altName: '關於陌聲', onClick: () => handleScrollTo('about') },
  { route: '/service', mainName: 'service', altName: '服務內容' },
  { route: '/portfolio', mainName: 'portfolio', altName: '作品集' },
  {
    index: true, mainName: 'video', altName: '影音分享',
    routes: [
      { route: '/news', mainName: 'news', altName: '最新消息' },
      { route: '/articles', mainName: 'articles', altName: '相關文章' },
      { route: '/cases', mainName: 'cases', altName: '最新消息' },
    ]
  },
  { route: '/contact', mainName: 'contact', altName: '聯絡我們' },
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
      {routes.map((routeDetail, index) =>
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


