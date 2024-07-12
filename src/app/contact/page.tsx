import { type Metadata } from 'next'
import React from 'react'
import { scheherazade } from '@/app/fonts'
import GoogleMap from './components/GoogleMap/GoogleMap.component'
import Contact from './components/Contact/Contact.component'
import OnlineForm from './components/OnlineForm/OnlineForm.component'

const title = "聯絡我們 – 陌聲行銷有限公司 | 04-2201-0520 | 403518台中市西區英才路530號23樓之5 | musense.marketing"

const ogImageObj = {
  alt: title,
  url: '/contact.jpg',
  width: 1200,
  height: 630
}

export const metadata: Metadata = {
  title: title,
  openGraph: {
    type: "website",
    title: title,
    description: "珠寶設計與生產首選陌聲行銷！陌聲提供專業珠寶設計、珠寶生產、珠寶保養、珠寶課程等服務，致力於傾聽客戶需求、展現精湛工藝和卓越品質。",
    siteName: "Musense Jewelry Design",
    images: [ogImageObj],
  },
  twitter: {
    images: [ogImageObj]
  },
};


const ContactPage = () => {
  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <GoogleMap className={"mb-32"} />
      <Contact className={"md:mb-32 mb-24"} />
      <OnlineForm className={"md:mb-32 mb-12"} />
    </div>
  )


}

export default ContactPage

