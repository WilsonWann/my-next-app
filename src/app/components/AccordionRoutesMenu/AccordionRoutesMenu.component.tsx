import { OpenRouteMenu } from '@/types'
import React, { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

const AccordionRoutesMenu: FC<OpenRouteMenu> = (props) => {

  const { isMenuOpen, openMenu, closeMenu, routes } = props

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        {routes.map((routeDetail, index) => (
          !routeDetail.indexPage && (
            <AccordionContent>
              <Link
                key={index}
                href={routeDetail.route}
                className={"hover:text-primary-foreground hover:bg-secondary"}
              >{routeDetail.altName}</Link>
            </AccordionContent>
          )
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionRoutesMenu