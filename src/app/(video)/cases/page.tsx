'use client'

import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { photosImages } from "@/app/imageHandler"

const CasesPage = () => {
  return (
    photosImages.map((image, index) => (
      <CardDemo key={index} image={image} />
    ))
  )
}

export default CasesPage