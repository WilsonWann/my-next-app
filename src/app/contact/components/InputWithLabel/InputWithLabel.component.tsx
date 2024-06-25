import React, { FC } from 'react'
import { useFormContext, FieldErrors } from 'react-hook-form';
import { FormValues } from '../OnlineForm/OnlineForm.component';

type Props = {
  id: keyof FormValues,
  label: string,
  errors: FieldErrors<FormValues>
}

const InputWithLabel: FC<Props> = ({ id, label, errors }) => {

  const { register } = useFormContext()

  const error = errors[id]
  const errorMessage = error?.message

  const className = errorMessage ? '!border-red-500' : ''

  return (
    <div className={`flex flex-col justify-between items-baseline gap-1 w-full`}>
      <label htmlFor={id}>{label}</label>
      <input {...register(id)} className={`bg-transparent w-full
        border-b border-title rounded-none focus:outline-none ${className}`} />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  )
}


export default InputWithLabel