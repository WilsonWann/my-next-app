import React, { FC } from 'react'
import { PhoneCall } from 'lucide-react';

type Props = {
  onClick?: () => void
}

const TelephoneIcon: FC<Props> = (props) => <PhoneCall {...props} />

export default TelephoneIcon