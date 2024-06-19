import React from 'react'
import { scheherazade } from '@/app/fonts'
import GoogleMap from './components/GoogleMap/GoogleMap.component'
import Contact from './components/Contact/Contact.component'
import OnlineForm from './components/OnlineForm/OnlineForm.component'


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

