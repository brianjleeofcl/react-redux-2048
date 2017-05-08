import * as React from 'react'
import './Modal.css'

interface Prop {
  title: string;
  children: JSX.Element;
}

export default function Modal({ children, title }: Prop): JSX.Element {
  return <div className="Modal-background">
    <div className="Modal">
      <h3>{title}</h3>
      {children}
    </div>
  </div>
}