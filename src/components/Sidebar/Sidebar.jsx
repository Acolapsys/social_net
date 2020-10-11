import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__logo}>Social Net</div>
            <nav className={styles.sidebar__nav}>
            <ul className={styles.sidebar__menu}>
                <li className={styles.sidebar__item}><a href="/" className={styles.menu__link}>Profile</a></li>
                <li className={styles.sidebar__item}><a href="/" className={styles.menu__link}>Messages</a></li>
                <li className={styles.sidebar__item}><a href="/" className={styles.menu__link}>News</a></li>
                <li className={styles.sidebar__item}><a href="/" className={styles.menu__link}>Music</a></li>
                <li className={styles.sidebar__item}><a href="/" className={styles.menu__link}>Settings</a></li>
            </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;