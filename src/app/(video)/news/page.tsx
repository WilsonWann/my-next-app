'use client'

import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { serviceContentImages } from "@/app/imageHandler"

const NewsPage = () => {
  return (
    serviceContentImages.map((serviceContentImage, index) => (
      <CardDemo key={index} image={serviceContentImage.image} />
    ))
  )
}

export default NewsPage