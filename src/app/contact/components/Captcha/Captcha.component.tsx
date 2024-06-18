import HCaptcha from '@hcaptcha/react-hcaptcha'
import React, { forwardRef } from 'react'
import { useCaptcha } from '@/app/CaptchaProvider'

type CaptchaProps = {
  onVerify: (token: string | null) => void
  onLoad?: () => void
}
const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!;
const Captcha = forwardRef<HCaptcha, CaptchaProps>(({ onVerify, onLoad = () => {} }, ref) => {

  // const { sitekey } = useCaptcha();

  const onExpire = () => {
    console.log("hCaptcha Token Expired");
  };

  const onError = (err: string) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  // if (!sitekey) return null

  return (
    <HCaptcha
      ref={ref}
      onVerify={onVerify}
      // size="invisible"
      sitekey={sitekey}
      onError={onError}
      onExpire={onExpire}
      onLoad={onLoad}
    />
  )
})


Captcha.displayName = 'Captcha';

export default Captcha