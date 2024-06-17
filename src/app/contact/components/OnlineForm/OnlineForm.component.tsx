'use client'

import React, { FC, useRef } from 'react'
import { noto } from '@/app/fonts'
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import Captcha from '../Captcha/Captcha.component'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { verifyCaptcha } from '@/app/action/verifyCaptcha';
import Button from '@/app/components/Button/Button.component';

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

export type FormValues = {
  name: string;
  phone: string;
  lineId: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: Record<string, { type: string; message: string }> = {};

  if (!values.name) {
    errors.name = {
      type: 'required',
      message: '請輸入姓名',
    }
  }

  if (!values.phone) {
    errors.phone = {
      type: 'required',
      message: '請輸入聯絡電話',
    }
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};

type OnlineFormProps = {
  className?: string
}
const OnlineForm: FC<OnlineFormProps> = ({ className = '' }) => {

  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver,
    shouldFocusError: true,
  });

  const captchaRef = useRef<HCaptcha>(null);

  const handleCaptchaChange = async (token: string | null) => {

    if (token && captchaRef.current) {
      const data = getValues()
      const responseData = await verifyCaptcha(token)

      if (responseData.success) {
        alert(`Form submitted successfully.
客戶名稱/NAME: ${data.name}
聯絡電話/PHONE: ${data.phone}
LINE ID: ${data.lineId}
留言/MESSAGE: ${data.message}
          ` );
        //* do something... 
        //* submit form here...
      } else {
        alert('Captcha verification failed.');
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    console.log('🚀 ~ const onSubmit:SubmitHandler<FormValues> = ~ values:', values)

    handleFormSubmitWithCaptcha()

  };
  const handleFormSubmitWithCaptcha = async () => {
    if (captchaRef.current) {
      captchaRef.current.execute()
    }
  };

  const handleReset = () => reset()
  return <div className={`flex flex-col justify-between items-baseline gap-y-4 ${className}`}>
    <h2 className="text-title">線上表單</h2>
    <form
      className={`${noto.className} flex flex-col justify-between items-baseline gap-12`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {ContactFormArray.map((contactForm, index) => {
        const { id, label } = contactForm
        const error = errors[id]
        const className = error ? 'border-red-500' : ''
        const errorMessage = error?.message
        return (
          <div key={index} className={`flex flex-col justify-between items-baseline `}>
            <label htmlFor={id}>{label}</label>
            <input {...register(id)} className={`bg-transparent w-96 border-b border-title focus:outline-none ${className}`} />
            <p className="text-red-500">{errorMessage}</p>
          </div>
        )
      })}
      <div className="flex flex-col justify-between items-baseline">
        <Captcha
          ref={captchaRef}
          onVerify={handleCaptchaChange} />
      </div>
      <div className="flex justify-end items-center gap-4 w-full">
        <Button onClick={handleReset}>清除</Button>
        <Button type="submit">送出</Button>
      </div>
    </form>
  </div>
}

export default OnlineForm



