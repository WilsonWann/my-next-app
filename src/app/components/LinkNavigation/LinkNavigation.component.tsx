'use client'
import React, { FC } from "react";
import ListWithLink from "../ListWithLink/ListWithLink.component";
import { routes } from "@/app/const/RouteDetail";

type Props = {
  menuButton?: React.ReactNode
  listClassName?: string
  linkClassName?: string
  header?: boolean
};
const LinkNavigation: FC<Props> = (props) => {

  const {
    menuButton,
    listClassName = '',
    linkClassName = '',
    header = false
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
          header={header}
        />
      )}
    </>
  );
};

export default LinkNavigation;


