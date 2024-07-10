import React, { FC, useEffect, useState } from 'react'
import { routes } from "@/app/const/RouteDetail";
import { LinkWithRoutesProps, NavigationListProps, RouteDetail } from '@/types';
import HeaderListWithLink from '../HeaderListWithLink/HeaderListWithLink.component';
import NavLinkLayout from '../NavLinkLayout/NavLinkLayout.component'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import HeaderLinkRoute from '../HeaderLinkRoute/HeaderLinkRoute.component';

type HeaderListLinkWrapperProps = Omit<NavigationListProps, 'routeDetail'> & {
  menuButton: React.ReactNode
}

const HeaderListLinkWrapper: FC<HeaderListLinkWrapperProps> = (props) => {

  const [headerList, setHeaderList] = useState<React.ReactNode>();

  const headerListLaptop = (props: HeaderListLinkWrapperProps) => {
    return (
      routes.map((routeDetail, index) => (
        <HeaderListWithLink
          key={index}
          routeDetail={routeDetail}
          {...props}
        />
      ))
    )
  }

  const headerListMobile = (props: HeaderListLinkWrapperProps) => {

    const { linkClassName, listClassName } = props

    const commonClasses = `uppercase 
    md:w-fit w-full
    flex 
    md:flex-col flex-row
    gap-0
    flex-nowrap whitespace-nowrap 
    items-center 
    cursor-pointer
    select-none
    ${props.linkClassName}`

    return (
      <Accordion type="single" collapsible>
        {routes.map((routeDetail, index) => {
          const { indexPage, mainName, altName, ...rest } = routeDetail

          if (!routeDetail.routes) {
            return (
              <HeaderLinkRoute
                key={index}
                linkClassName={linkClassName}
                listClassName={listClassName}
                routeDetail={routeDetail}
              />
            )
          }
          return routeDetail.routes && (
            <AccordionItem value={routeDetail.mainName}>
              <AccordionTrigger className="p-0">
                <div className={`uppercase no-underline focus:no-underline bg-slate-50 h-auto relative flex justify-between items-center w-full ${linkClassName}`} >
                  <span>{routeDetail.mainName}</span>
                  <b>{routeDetail.altName}</b>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col ">
                {
                  routeDetail.routes.map((routeDetail, index) => (
                    !routeDetail.indexPage && (
                      <Link
                        key={index}
                        href={routeDetail.route}
                        className={`${commonClasses} `}
                      >{routeDetail.altName}</Link>
                    )
                  ))
                }
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>


      // routes.map((routeDetail, index) => (
      //   <HeaderListWithLinkMenu
      //     key={index}
      //     routeDetail={routeDetail}
      //     {...props}
      //   />
      // ))
    )
  }

  useEffect(() => {

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

const HeaderListWithLinkMenu: FC<NavigationListProps> = (props) => {

  const hasSubRoutes = (routeDetail: RouteDetail) => routeDetail.routes && routeDetail.routes.length > 0


  return (
    <Accordion type="single" collapsible>


      {props.routeDetail.routes ? (
        <AccordionItem className={`h-10 relative ${props.listClassName}`} value={routeDetail.mainName}>
          <AccordionTrigger>
            <div className="flex justify-between items-center w-full" >
              <span>{routeDetail.mainName}</span>
              <b>{routeDetail.altName}</b>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col ">
            {
              routes.map((routeDetail, index) => (
                !routeDetail.indexPage && (
                  <Link
                    key={index}
                    href={routeDetail.route}
                  >{routeDetail.altName}</Link>
                )
              ))
            }
          </AccordionContent>
        </AccordionItem>
      ) : (
        <HeaderLinkRouteAccordion {...props} />
      )}
    </Accordion>
  )
}

const HeaderLinkRouteAccordion: FC<Omit<LinkWithRoutesProps, 'routes'>> = (props) => {

  const commonClasses = `uppercase 
  md:w-fit w-full
  flex 
  md:flex-col flex-row
  gap-0
  flex-nowrap whitespace-nowrap 
  items-center 
  cursor-pointer
  select-none
  ${props.linkClassName}`

  const { linkClassName, routeDetail } = props
  const { indexPage, mainName, altName, ...rest } = routeDetail

  return (
    <AccordionItem className={`h-10 relative ${props.listClassName}`} value={routeDetail.mainName}>
      <AccordionTrigger>
        {routeDetail.route && <Link href={routeDetail.route} className={`${commonClasses} `} >
          <span>{routeDetail.mainName}</span>
          <b>{routeDetail.altName}</b>
        </Link>}
      </AccordionTrigger>
    </AccordionItem>
  )
}

const HeaderListWithLinkAccordion: FC<LinkWithRoutesProps> = (props) => {

  const { linkClassName, routeDetail, routes } = props

  const { indexPage, mainName, altName, ...rest } = routeDetail

  return (
    <AccordionItem className={`h-10 relative ${props.listClassName}`} value={routeDetail.mainName}>
      <AccordionTrigger>
        <div className="flex justify-between items-center w-full" >
          <span>{routeDetail.mainName}</span>
          <b>{routeDetail.altName}</b>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col ">
        {
          routes.map((routeDetail, index) => (
            !routeDetail.indexPage && (
              <Link
                key={index}
                href={routeDetail.route}
              >{routeDetail.altName}</Link>
            )
          ))
        }
      </AccordionContent>
    </AccordionItem>
  )
}
