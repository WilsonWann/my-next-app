import HCaptcha from '@hcaptcha/react-hcaptcha'
import React, { forwardRef } from 'react'

type CaptchaProps = {
  onVerify: (token: string | null) => void
}

const Captcha = forwardRef<HCaptcha, CaptchaProps>(({ onVerify }, ref) => {

  const sitekey = '8c476be5-307f-477c-8d80-3574d749f544'
  console.log('🚀 ~ Captcha ~ sitekey:', sitekey)

  const onExpire = () => {
    console.log("hCaptcha Token Expired");
  };

  const onError = (err: string) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  return (
    <HCaptcha
      ref={ref}
      onVerify={onVerify}
      // size="invisible"
      sitekey={sitekey}
      onError={onError}
      onExpire={onExpire}
    />
  )
})

Captcha.displayName = 'Captcha';

export default Captcha