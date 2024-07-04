import React, { FC } from 'react'
import { MapPin } from 'lucide-react';

type Props = {
  onClick?: () => void
}

const LocationIcon: FC<Props> = (props) => <MapPin {...props} />

export default LocationIcon