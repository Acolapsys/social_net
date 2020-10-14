import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
      <div className={styles.dialogs}>
        <h2 className={styles.dialogsTitle}>Dialogs</h2>

        <div className={styles.dialogsItems}>
          <div className={styles.dialog}>Michael</div>
          <div className={styles.dialog + ' ' + styles.active}>Den</div>
          <div className={styles.dialog}>Devil Master</div>
          <div className={styles.dialog}>Sun Puppy</div>
          <div className={styles.dialog}>Bro</div>
          <div className={styles.dialog}>Best Hacker</div>
          <div className={styles.dialog}>New Age</div>
          <div className={styles.dialog}>Bob</div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>How r u?</div>
          <div className={styles.message}>Fine, and you?</div>
          <div className={styles.message}>I'm best</div>
        </div>
      </div>
    )
};

export default Dialogs;