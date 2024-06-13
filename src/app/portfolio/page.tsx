import React from 'react'
import { scheherazade } from '@/app/fonts'

const PortfolioPage = () => {

  const colorsArray = ['amber', 'slate', 'red', 'blue', 'yellow', 'green']

  return (
    <div className={`${scheherazade.className} grid grid-cols-3-auto-rows w-screen h-screen justify-items-stretch items-stretch 
  *:flex *:justify-center *:items-center`}>
      {colorsArray.map((color, index) => {
        const mainColor = `bg-${color}-500`

        return (
          <div key={index} className={`relative ${mainColor} hover:before:z-10
        before:absolute before:inset-0 before:opacity-30 before:bg-black before:z-[-1]`}>
            hello world
          </div>
        )
      })}

    </div >
  )
}

export default PortfolioPage