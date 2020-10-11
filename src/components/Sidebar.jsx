import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">Social Net</div>
            <nav className="sidebar__nav">
            <ul className="sidebar__menu">
                <li className="sidebar__item"><a href="/" className="menu__link">Profile</a></li>
                <li className="sidebar__item"><a href="/" className="menu__link">Messages</a></li>
                <li className="sidebar__item"><a href="/" className="menu__link">News</a></li>
                <li className="sidebar__item"><a href="/" className="menu__link">Music</a></li>
                <li className="sidebar__item"><a href="/" className="menu__link">Settings</a></li>
            </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;