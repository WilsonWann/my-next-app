'use client'
import React from 'react'
import { scheherazade } from '@/app/fonts'
import GoogleMap from './components/GoogleMap/GoogleMap.component'

const ContactPage = () => {

  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <GoogleMap className={"mb-32"} />
    </div>
  )
}

export default ContactPage