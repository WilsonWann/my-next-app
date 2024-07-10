'use client'

import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { portfolioImages } from "@/app/imageHandler"

const ArticlesPage = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {portfolioImages.map((portfolioImage, index) => (
        <CardDemo key={index} image={portfolioImage.image} />
      ))}
    </div>
  )
}

export default ArticlesPage

