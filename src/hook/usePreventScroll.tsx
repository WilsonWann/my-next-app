import { useEffect } from 'react'

const usePreventScroll = (active: boolean = false) => {
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto'
  }, [active])
}

export default usePreventScroll
