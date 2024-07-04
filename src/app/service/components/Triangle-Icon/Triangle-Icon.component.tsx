import React, { FC } from 'react'
import { ChevronsDown } from 'lucide-react';

type Props = {
  className?: string
}

const TriangleIcon: FC<Props> = (props) => <ChevronsDown {...props} />

export default TriangleIcon