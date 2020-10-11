import React from 'react';
import styles from './ContentHeader.module.css'

const ContentHeader = () => {
    return (
        <div className={styles.content__header}>
        <h1 className={styles.content__title}>Messages</h1>
      </div>
    )
};

export default ContentHeader;