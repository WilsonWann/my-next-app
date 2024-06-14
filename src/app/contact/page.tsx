'use client'
import React from 'react'
import { scheherazade } from '@/app/fonts'
import GoogleMap from './components/GoogleMap/GoogleMap.component'

const ContactPage = () => {

  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <GoogleMap className={"mb-32"} />
      <div className={`flex
      sm:flex-row flex-col
       justify-center items-center 
       md:gap-24 sm:gap-12 gap-6
       `}>
        <div className="flex flex-col justify-between items-center gap-4">
          <h2 className="text-xl font-bold self-start">聯絡我們</h2>
          <h2 className="text-5xl font-thin text-title">CONTACT</h2>
          <div data-attr="﹡" className="text-lg before:content-[attr(data-attr)] self-end">musense</div>
        </div>
        <div className={`grid 
        md:grid-cols-2 grid-cols-1
        md:grid-rows-2 grid-rows-4
        `}>
          <div data-attr="電話">04-2221-0808</div>
          <div data-attr="信箱">originalinterior</div>
          <div data-attr="地址">原邸室內設計</div>
          <div data-attr="地址">台中市中區三民路二段46號8F-2A</div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage