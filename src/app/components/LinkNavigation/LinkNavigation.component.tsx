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
    header
      ? <HeaderListLinkWrapper {...classNameProps} menuButton={menuButton} />
      : <ListLinkWrapper {...classNameProps} />
  );
};

export default LinkNavigation;


