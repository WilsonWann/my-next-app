"use client";

import React, { FC, createContext, useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { verifyCaptcha } from "@/app/action/verifyCaptcha";
import { usePathname } from "next/navigation";
import useCallbackFn from "@/hook/useCallbackFn";
import useViewCallback from "@/hook/useViewCallback";
import useCaptcha from "@/hook/useCaptcha";

interface CaptchaContextProps {
  captchaRef: React.RefObject<HCaptcha> | null;
  onVerify: (token: string | null) => void;
  triggerCaptchaExecute: () => void;
  resetCaptcha: () => void;
  captchaVerified: boolean;
  verifiedResponse: { success: boolean; message: string } | null;
}

export const CaptchaContext = createContext<CaptchaContextProps | undefined>(undefined);

const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!;

const CaptchaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const { setSiteKey, setSize } = useCaptcha()

  const siteKeyRef = useRef<string>();
  if (!siteKeyRef.current) {
    siteKeyRef.current = hcaptchaSiteKey;
    setSiteKey(hcaptchaSiteKey)
  }

  useViewCallback(
    () => setSize('compact'),
    () => setSize('normal')
  );

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [verifiedResponse, setVerifiedResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const pathname = usePathname();

  const captchaRef = useRef<HCaptcha>(null);

  useCallbackFn(() => setCaptchaVerified(false), pathname)

  const triggerCaptchaExecute = () => {
    if (captchaRef.current) {
      captchaRef.current.execute();
    }
  };

  const resetCaptcha = () => {
    if (captchaRef.current) {
      captchaRef.current.resetCaptcha();
      setVerifiedResponse(null);
      setCaptchaVerified(false);
    }
  };

  const handleCaptchaChange = async (token: string | null) => {
    if (token && captchaRef.current) {
      const responseData = await verifyCaptcha(token);

      setVerifiedResponse(responseData);
    }
  };

  const onVerify = async (token: string | null) => {
    await handleCaptchaChange(token);
    setCaptchaVerified(true);
  }

  return (
    <CaptchaContext.Provider
      value={{
        captchaRef,
        onVerify,
        triggerCaptchaExecute,
        resetCaptcha,
        captchaVerified,
        verifiedResponse,
      }}
    >
      {children}
    </CaptchaContext.Provider>
  );
};

export default CaptchaProvider;

