import React, { FC } from 'react'
import { Instagram } from 'lucide-react';

type Props = {
  onClick?: () => void
}

const InstagramIcon: FC<Props> = (props) => <Instagram {...props} />

export default InstagramIcon