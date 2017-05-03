import * as React from 'react';
import './button.css';

interface props {
  children?: any;
  click: React.EventHandler<React.MouseEvent<HTMLAnchorElement>>;
}

export default function Button({ children, click }: props): JSX.Element {
  return <a onClick={click} className="Button">{children}</a>
}