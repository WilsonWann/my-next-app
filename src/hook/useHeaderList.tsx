import { HeaderListLinkWrapperProps } from '@/types';
import React, { useEffect, useState } from 'react'
import { routes } from "@/app/const/RouteDetail";
import HeaderListWithLink from '@/app/components/HeaderListWithLink/HeaderListWithLink.component';
import HeaderListWithLinkAccordion from '@/app/components/HeaderListWithLinkAccordion/HeaderLinkWithLinkAccordion.component';

const useHeaderList = (props: HeaderListLinkWrapperProps) => {

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
  }, []);

  return { headerList }
}

export default useHeaderList