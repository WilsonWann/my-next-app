import React, { FC } from 'react'
import { Facebook } from 'lucide-react';

type Props = {
  onClick?: () => void
}

const FacebookIcon: FC<Props> = (props) => <Facebook {...props} />

export default FacebookIcon