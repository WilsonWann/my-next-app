'use client'

import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { portfolioImages } from "@/app/imageHandler"

const ArticlesPage = () => {

  return (
    portfolioImages.map((portfolioImage, index) => (
      <CardDemo key={index} image={portfolioImage.image} />
    ))
  )
}

export default ArticlesPage

