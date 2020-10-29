import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__menu}>
          <li className={styles.sidebar__item}>
            <NavLink
              to="/profile"
              activeClassName={styles.active}
              className={styles.menu__link}
            >
              Profile
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink
              to="/dialogs"
              activeClassName={styles.active}
              className={styles.menu__link}
            >
              Messages
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink
              to="/users"
              activeClassName={styles.active}
              className={styles.menu__link}
            >
              Users
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink
              to="/news"
              activeClassName={styles.active}
              className={styles.menu__link}
            >
              News
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink
              to="/music"
              activeClassName={styles.active}
              className={styles.menu__link}
            >
              Music
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink
              to="/settings"
              activeClassName={styles.active}
              className={styles.menu__link}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
