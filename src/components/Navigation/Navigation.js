import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.scss';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/subjects/'>Subjects</Link>
        </li>
        <li>
          <Link to='/bills/'>Bills</Link>
        </li>
        <li>
          <Link to='/politicians/'>Politicians</Link>
        </li>
      </ul>
    </nav>
  );
}
