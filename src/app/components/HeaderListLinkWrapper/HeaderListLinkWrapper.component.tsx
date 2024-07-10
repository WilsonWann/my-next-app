import React, { FC, useEffect, useState } from 'react'
import { routes } from "@/app/const/RouteDetail";
import { HeaderListLinkWrapperProps } from '@/types';
import HeaderListWithLink from '../HeaderListWithLink/HeaderListWithLink.component';
import HeaderListWithLinkAccordion from '../HeaderListWithLinkAccordion/HeaderLinkWithLinkAccordion.component';

const HeaderListLinkWrapper: FC<HeaderListLinkWrapperProps> = (props) => {

  const [headerList, setHeaderList] = useState<React.ReactNode>();

  useEffect(() => {
    const headerListLaptop = (props: HeaderListLinkWrapperProps) =>
      routes.map((routeDetail, index) => (
        <HeaderListWithLink
          key={index}
          routeDetail={routeDetail}
          {...props}
        />
      ))

    const headerListMobile = (props: HeaderListLinkWrapperProps) =>
      <HeaderListWithLinkAccordion {...props} />

    const handleSetHeaderList = () => {
      if (window.innerWidth > 768) {
        setHeaderList(headerListLaptop(props))
      } else {
        setHeaderList(headerListMobile(props))
      }
    }

    window.addEventListener("resize", handleSetHeaderList)

    handleSetHeaderList()
    return () => {
      window.removeEventListener("resize", handleSetHeaderList)
    }
  }, [props]);

  return (
    <>
      {props.menuButton}
      {headerList}
    </>
  )
}

export default HeaderListLinkWrapper