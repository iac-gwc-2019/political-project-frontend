import React from 'react';
import styles from './AllSubjects.scss';

export default function SubjectBlock() {

  return (
    <div>
      <div className={styles.infoBlock}>
        <img src='http://picklemethis.com/wp-content/uploads/2017/01/feminist.png' width='70px' height='70px'/>
        <h5>Women&apos;s Rights</h5>
        <p>Here is some more info about the topic</p>
      </div>
      <hr className="grayLine" />
    </div>
  )
}
