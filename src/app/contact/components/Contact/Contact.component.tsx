import React, { FC } from 'react'
import { noto } from '@/app/fonts'
import Link from 'next/link'
import TelephoneIcon from '../Telephone-Icon/Telephone-Icon.component'
import InstagramIcon from '../Instagram-Icon/Instagram-Icon.component'
import FacebookIcon from '../Facebook-Icon/Facebook-Icon.component'
import LocationIcon from '../Location-Icon/Location-Icon.component'

const contactDetailArray = [
  {
    icon: <TelephoneIcon />,
    href: "tel:0422010520",
    text: "04-2201-0520"
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/musense.marketing/",
    text: "musense.marketing"
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/musense.marketing/",
    text: "陌聲行銷有限公司"
  },
  {
    icon: <LocationIcon />,
    href: "https://maps.app.goo.gl/WqhQ4mBE7WYVNNYx7",
    text: "403518台中市西區英才路530號23樓之5"
  },
]

type Props = {
  className?: string
}

const Contact: FC<Props> = ({ className = '' }) => {

  return <div className={`flex
      sm:flex-row flex-col
       justify-center items-center 
       md:gap-24 sm:gap-12 gap-6 ${className}
       `}>
    <div className="flex flex-col justify-between items-center gap-2">
      <h2 className="text-xl font-bold self-start">聯絡我們</h2>
      <h2 className="text-5xl font-thin text-title">CONTACT</h2>
      <div data-attr="﹡" className="text-lg before:content-[attr(data-attr)] self-end">musense</div>
    </div>
    <div className={`grid 
        md:grid-2x2 grid-1x4
        md:grid-rows-2 grid-rows-4     
        place-items-start
        xl:gap-x-24 md:gap-x-2 gap-x-2
        md:gap-y-4 gap-y-2
        md:px-0 px-8
        `}>
      {contactDetailArray.map((contactDetail, index) => {
        const { icon, href, text } = contactDetail
        return (
          <Link key={index} href={href} target="_blank" rel="noreferrer" className="w-fit h-fit">
            <div className={`${noto.className} flex justify-start items-start gap-4 group         
                  xl:text-2xl md:text-xl text-lg
                      text-title font-semibold`}>
              <span className="pt-1 md:group-hover:animate-bounce ">{icon}</span>
              <span>{text}</span>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
}

export default Contact