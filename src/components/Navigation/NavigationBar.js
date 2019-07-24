import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.scss'

export default function NavigationBar() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to="/subjects/"><i className ="far fa-lightbulb"></i>   subjects </Link>
        </li>
        <li>
          <Link to='/bills/'><i className ="far fa-file-alt"></i> bills</Link>
        </li>
        <li>
          <Link to='/politicians/'><i className="far fa-handshake"></i>  politicians</Link>
        </li>
      </ul>
    </nav>
  );
}
