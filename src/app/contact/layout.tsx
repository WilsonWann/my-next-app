import React, { FC } from 'react'
import GoogleMapProvider from "@/app/Providers/GoogleMapProvider";
import CaptchaProvider from "@/app/Providers/CaptchaProvider";

type Props = {
  children: React.ReactNode
}

const ContactLayout: FC<Props> = (props) => {
  return (
    <GoogleMapProvider>
      <CaptchaProvider>
        {props.children}
      </CaptchaProvider>
    </GoogleMapProvider>
  )
}

export default ContactLayout