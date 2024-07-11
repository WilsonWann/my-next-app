import { HeaderListLinkWrapperProps } from '@/types'
import { routes } from "@/app/const/RouteDetail";
import React, { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import HeaderLinkRoute from '../HeaderLinkRoute/HeaderLinkRoute.component';

const HeaderListWithLinkAccordion: FC<HeaderListLinkWrapperProps> = (props) => {

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
          <AccordionItem key={index} value={routeDetail.mainName}>
            <AccordionTrigger className="p-0">
              <div className={`uppercase no-underline focus:no-underline bg-slate-50 h-auto relative flex justify-between items-center w-full ${linkClassName}`} >
                <span>{routeDetail.mainName}</span>
                <b>{routeDetail.altName}</b>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col p-0">
              {
                routeDetail.routes.map((routeDetail, index) => (
                  !routeDetail.indexPage && (
                    <Link
                      key={index}
                      aria-label={`${routeDetail.altName} 連結`}
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
  )
}

export default HeaderListWithLinkAccordion