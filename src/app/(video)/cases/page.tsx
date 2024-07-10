'use client'

import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { photosImages } from "@/app/imageHandler"

const CasesPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {photosImages.map((image, index) => (
        <CardDemo key={index} image={image} />
      ))}
    </div>
  )
}

export default CasesPage