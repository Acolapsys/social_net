import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          Social Net
        </div>
      </div>
    )
};

export default Header;