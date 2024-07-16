import { useEffect } from 'react'

const useViewCallback = (callbackForMobile?: () => void, callbackForLaptop?: () => void) => {

  useEffect(() => {

    const handleMobileResize = () => {
      if (window.innerWidth <= 768) {
        callbackForMobile && callbackForMobile()
      } else {
        callbackForLaptop && callbackForLaptop()
      }
    }

    window.addEventListener("resize", handleMobileResize)

    handleMobileResize()
    return () => {
      window.removeEventListener("resize", handleMobileResize)
    }
  }, []);
}

export default useViewCallback