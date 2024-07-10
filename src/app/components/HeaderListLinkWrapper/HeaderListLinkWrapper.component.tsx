import React, { FC } from 'react'
import { routes } from "@/app/const/RouteDetail";
import { NavigationListProps } from '@/types';
import HeaderListWithLink from '../HeaderListWithLink/HeaderListWithLink.component';

type HeaderListLinkWrapperProps = Omit<NavigationListProps, 'routeDetail'> & {
  menuButton: React.ReactNode
}
const HeaderListLinkWrapper: FC<HeaderListLinkWrapperProps> = (props) => {

  return (
    <>
      {props.menuButton}
      {routes.map((routeDetail, index) => (
        <HeaderListWithLink
          key={index}
          routeDetail={routeDetail}
          {...props}
        />
      ))}
    </>
  )
}

export default HeaderListLinkWrapper