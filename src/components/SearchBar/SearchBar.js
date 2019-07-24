import React from 'react';
import {Link} from 'react-router-dom';
import styles from './SearchBar.scss';

export default function SearchBar(){
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input type="text" className={styles.searchTerm} placeholder="What are you looking for?"/>
          <button type="submit" className={styles.searchButton}>
            <i className="fa fa-search"></i>
          </button>
      </div>
    </div>
  )
}
