import HCaptcha from "@hcaptcha/react-hcaptcha";
import React, { forwardRef } from "react";

type CaptchaProps = {
  onVerify: (token: string | null) => void;
  onLoad?: () => void;
};
const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!;
const Captcha = forwardRef<HCaptcha, CaptchaProps>(
  ({ onVerify, onLoad = () => {} }, ref) => {
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
        onLoad={onLoad}
      />
    );
  },
);

Captcha.displayName = "Captcha";

export default Captcha;
