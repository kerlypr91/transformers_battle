import React from 'react'
import Icon from '../../../Images/page_icon.png'

import './_header.scss'

export default function Header () {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Icon} className="header__logo__icon" />
        <h5>The Transformation Company</h5>
      </div>
      <div className="header__title">
        <h1>Transformers Battle</h1>
      </div>
    </header>
  )
}
