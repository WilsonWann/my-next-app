'use client'

import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { serviceContentImages } from "@/app/imageHandler"

const NewsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {serviceContentImages.map((serviceContentImage, index) => (
        <CardDemo key={index} image={serviceContentImage.image} />
      ))}
    </div>
  )
}

export default NewsPage