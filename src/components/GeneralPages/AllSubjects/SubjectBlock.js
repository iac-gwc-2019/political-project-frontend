import React from 'react';
import styles from './AllSubjects.scss';

export default function SubjectBlock() {

return (
  <div>
    <Link to="/subject" className={styles.link}><div className={styles.infoBlock}>
    <h5>Women&apos;s Rights</h5>
    </div>
    </Link>
  </div>
)
}
