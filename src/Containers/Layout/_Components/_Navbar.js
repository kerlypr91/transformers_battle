import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import { Routes } from '../../../Utils'

import './_navbar.scss'

export default function Navbar () {
  return (
    <nav className="navbar">
      {
        Routes.map(item => {
          const { label, path, exact, icon } = item

          return (
            <NavLink
              key={label}
              to={path}
              exact={!!exact}
              className="navbar__link"
              activeClassName="navbar__link--selected"
            >
              <Icon name={icon} className="navbar__link__icon" />
              <h4 className="navbar__link__label">{label}</h4>
            </NavLink>
          )
        })
      }
    </nav>
  )
}
