'use client'
import React, { FormEvent, FormEventHandler, useRef, useState } from 'react'
import { scheherazade, noto } from '@/app/fonts'
import GoogleMap from './components/GoogleMap/GoogleMap.component'
import Contact from './components/Contact/Contact.component'
import { useForm, Resolver, Controller, type SubmitHandler } from 'react-hook-form';
// import Captcha from './components/Captcha/Captcha.component'
import HCaptcha from '@hcaptcha/react-hcaptcha';

// const sitekey = '10000000-ffff-ffff-ffff-000000000001'
const sitekey = '8c476be5-307f-477c-8d80-3574d749f544'

type FormValues = {
  name: string;
  phone: string;
  lineId: string;
  message: string;
  hcaptcha: string | null;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: {},
    errors: {},
  };
};

const ContactFormArray = [
  {
    id: 'name' as const,
    label: '客戶名稱/NAME'
  },
  {
    id: 'phone' as const,
    label: '聯絡電話/PHONE'
  },
  {
    id: 'lineId' as const,
    label: 'LINE ID'
  },
  {
    id: 'message' as const,
    label: '留言/MESSAGE'
  }
]
const ContactPage = () => {

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver });

  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    console.log('🚀 ~ handleCaptchaChange ~ token:', token)
    setCaptchaToken(token);
    setValue('hcaptcha', token);
    if (token && captchaRef.current) {
      handleSubmit(onSubmit)(); // 驗證成功後調用 handleSubmit
    }
  };

  const onExpire = () => {
    console.log("hCaptcha Token Expired");
  };

  const onError = (err: string) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('🚀 ~ const onSubmit:SubmitHandler<FormValues> = ~ data:', data)
    if (!captchaToken) {
      alert('Please complete the captcha.');
      return;
    }

    const response = await fetch('/api/verify-captcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: captchaToken, formData: data }),
    });

    const responseData = await response.json();
    console.log('🚀 ~ const onSubmit:SubmitHandler<FormValues> = ~ responseData:', responseData)
    if (responseData.success) {
      alert('Form submitted successfully.');
      //* do something... 
    } else {
      alert('Captcha verification failed.');
    }
  };
  const handleFormSubmitWithCaptcha = async (event: FormEvent) => {
    event.preventDefault();
    if (captchaRef.current) {
      captchaRef.current.execute()
    }
  };

  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <GoogleMap className={"mb-32"} />
      <Contact className={"mb-32"} />
      <div className="flex flex-col justify-between items-baseline gap-y-4">
        <h2 className="text-title">線上表單</h2>
        <form
          className={`${noto.className} flex flex-col justify-between items-baseline gap-12`}
          onSubmit={handleFormSubmitWithCaptcha}
        >

          {
            ContactFormArray.map((contactForm, index) => {
              const { id, label } = contactForm
              return (
                <div key={index} className="flex flex-col justify-between items-baseline">
                  <label htmlFor={id}>{label}</label>
                  <input {...register(id)} className="bg-transparent w-96 border-b border-title focus:outline-none" />
                  {(errors && errors[id]) && <p>{errors[id].message}</p>}
                </div>
              )
            })
          }
          <div className="flex flex-col justify-between items-baseline">
            <Controller
              name="hcaptcha"
              control={control}
              render={({ field }) => (
                <HCaptcha
                  sitekey={sitekey}
                  size="invisible"
                  onVerify={(token) => {
                    handleCaptchaChange(token);
                  }}
                  onError={onError}
                  onExpire={onExpire}
                  ref={captchaRef}
                />
              )}
            />
            {errors?.hcaptcha && <p>{errors.hcaptcha.message}</p>}
          </div>

          <button type="submit" >送出</button>
        </form>
      </div >
    </div >
  )
}

export default ContactPage


// const InputGroup = (id, label) => {
//   return <div className="flex flex-col justify-between items-baseline">
//     <label htmlFor={id}>{label}</label>
//     <input {...register(id)} className="bg-transparent w-96 border-b border-title focus:outline-none" />
//     {errors ? [id] && <p>{errors[id].message}</p>}
//   </div>
// }

