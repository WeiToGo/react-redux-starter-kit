import React from 'react';
import { Link } from 'react-router';
import './HomeView.scss';

export const HomeView = () => (
  <div>
    <h4>Welcome! Please login</h4>
    <Link to='/login' activeClassName='route--active'>
      Login
    </Link>
  </div>
);

export default HomeView;
