import React, { FC } from 'react'
import { X } from 'lucide-react';

type Props = {
  onClick?: () => void
  className?: string
}

const CloseIcon: FC<Props> = (props) => <X {...props} />

export default CloseIcon