'use client'

import { Button } from '@/components/ui/button'
import useCallbackFn from '@/hook/useCallbackFn'
import { FC } from 'react'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

const PortfolioCaseErrorPage: FC<Props> = (props) => {
  const { error, reset } = props

  useCallbackFn(() => console.error(error), error)

  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <h2 className="text-5xl">獲取資料失敗，請稍後再試！</h2>
      <Button type="reset" variant={'destructive'} onClick={() => reset()}>
        再試一次
      </Button>
    </div>
  )
}

export default PortfolioCaseErrorPage