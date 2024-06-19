'use client'

import React, { FC } from 'react'
import { noto } from '@/app/fonts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { UserSchema } from '@/zodSchema/UserSchema';
import { useCaptcha } from '@/app/CaptchaProvider';
import InputWithLabel from '../InputWithLabel/InputWithLabel.component';

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

type OnlineFormProps = {
  className?: string
}
const OnlineForm: FC<OnlineFormProps> = ({ className = '' }) => {

  const { renderCaptcha, verifiedResponse } = useCaptcha()

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: zodResolver(UserSchema),
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {

    if (!verifiedResponse || !verifiedResponse.success) {
      return
    }

    //* submit form here...

    alert(`Submit Form 
${verifiedResponse.message}
Form submitted successfully.
客戶名稱/NAME: ${values.name}
聯絡電話/PHONE: ${values.phone}
LINE ID: ${values.lineId}
留言/MESSAGE: ${values.message}
`);
  };


  const handleReset = () => methods.reset()

  return <div className={`flex flex-col justify-between items-baseline gap-y-4 ${className}`}>
    <h2 className="text-title">線上表單</h2>
    <FormProvider {...methods}>
      <form
        className={`${noto.className} flex flex-col justify-between items-baseline gap-12`}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {ContactFormArray.map(({ id, label }, index) =>
          <InputWithLabel key={index} id={id} label={label} errors={methods.formState.errors} />
        )}
        <div className="flex flex-col justify-between items-baseline">
          {renderCaptcha()}
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          <Button disabled={!verifiedResponse || !verifiedResponse.success} onClick={handleReset}>清除</Button>
          <Button disabled={!verifiedResponse || !verifiedResponse.success} type="submit">送出</Button>
        </div>

      </form>
    </FormProvider>
  </div>
}

export default OnlineForm