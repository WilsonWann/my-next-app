import { CaptchaContext } from '@/app/Providers/CaptchaProvider';
import { useContext } from 'react'

const useCaptchaContext = () => {

  const context = useContext(CaptchaContext);
  if (!context) {
    throw new Error('useCaptchaContext must be used within a CaptchaProvider');
  }

  return context
}

export default useCaptchaContext