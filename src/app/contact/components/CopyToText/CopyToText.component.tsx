import React, { FC } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
      className={'text-blue-500 cursor-pointer'}
      text={copyText}
      onCopy={onCopySuccess}
    >
      <span>{copyText}</span>
    </CopyToClipboard >
  )
}

export default CopyToText
