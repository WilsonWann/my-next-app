import React, { FC } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon } from 'lucide-react';

type Props = {
  copyText: string
}

const CopyToText: FC<Props> = ({ copyText }) => {

  const onCopySuccess = (text: string, result: boolean) => {
    if (result) {
      alert(`複製成功：${text}`)
    } else {
      alert(`複製失敗！`)
    }
  }

  return (
    <CopyToClipboard
      className={'flex justify-between items-center gap-1 hover:cursor-pointer hover:text-blue-500'}
      text={copyText}
      onCopy={onCopySuccess}
    >
      <div>
        <span>{copyText}</span>
        <CopyIcon size={14} />
      </div>
    </CopyToClipboard >
  )
}

export default CopyToText
