import { useEffect } from 'react'

const useLaptopView = (callback?: () => void) => {

  useEffect(() => {
    if (!callback) return

    const handleLaptopResize = () => {
      if (window.innerWidth > 768) {
        callback()
      }
    }

    window.addEventListener("resize", handleLaptopResize)

    handleLaptopResize()
    return () => {
      window.removeEventListener("resize", handleLaptopResize)
    }
  }, []);
}

export default useLaptopView