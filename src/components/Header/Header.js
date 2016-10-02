import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <div className="title">KittyTalk</div>
    <Link to='/login' activeClassName='route--active'>
      Login
    </Link>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
