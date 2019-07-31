import React from 'react';
import styles from './BillStyle.scss';

export default function Picture() {

return (
  <div className={styles.billImage}>
    <img src='https://www.micronic.com/uploads/news/a-more-sustainable-choice-for-sample-storage-1.png' width= "150px" height="150px"/>
    <img src='https://www.micronic.com/uploads/news/a-more-sustainable-choice-for-sample-storage-1.png' class="boom" width= "150px" height="150px"/>
    <img src='https://www.micronic.com/uploads/news/a-more-sustainable-choice-for-sample-storage-1.png' width= "150px" height="150px"/>
  </div>
  )
}
