'use client'
import React, { FC } from "react";
import HeaderListLinkWrapper from "../HeaderListLinkWrapper/HeaderListLinkWrapper.component";
import ListLinkWrapper from "../ListLinkWrapper/ListLinkWrapper.component";


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

  const classNameProps = {
    listClassName,
    linkClassName
  }
  return (
    <>
      {menuButton}
      {header
        ? <HeaderListLinkWrapper {...classNameProps} />
        : <ListLinkWrapper {...classNameProps} />}
    </>
  );
};

export default LinkNavigation;


