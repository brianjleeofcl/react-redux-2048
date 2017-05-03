import * as React from 'react'
import { Link } from 'react-router-dom'
// import {History} from 'history';
import './Modal.css'

export default function Modal({children}) {
  return <div className="Modal-background" onClick={() => history.push('/')}>
    <div className="Modal">
      <div>{children}</div>
      <Link to="/">Close Modal</Link>
    </div>
  </div>
}