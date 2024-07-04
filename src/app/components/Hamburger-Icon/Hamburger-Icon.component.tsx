import { FC } from "react";
import { Menu } from 'lucide-react';

type Props = {
  onClick?: () => void
  className?: string
}

const HamburgerMenuIcon: FC<Props> = (props) => <Menu {...props} />

export default HamburgerMenuIcon
