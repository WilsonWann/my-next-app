import useCaptcha from "@/hook/useCaptcha";
import { SizeType } from "@/types";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import React, { forwardRef, useEffect } from "react";

type CaptchaProps = {
  onVerify: (token: string | null) => void;
  onLoad?: () => void;
};

const Captcha = forwardRef<HCaptcha, CaptchaProps>((props, ref) => {

  const { siteKey, size } = useCaptcha()

  if (!siteKey) return null;

  const {
    onVerify,
    onLoad = () => {}
  } = props

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
      size={size}
      sitekey={siteKey}
      onError={onError}
      onExpire={onExpire}
      onLoad={onLoad}
    />
  );
},
);

Captcha.displayName = "Captcha";

export default Captcha;
