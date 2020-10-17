import React, { Component } from 'react';
import styles from './ProfileInfo.module.css'

export class ProfileInfo extends Component {
    render() {
        return (
            <div>
                <div className={styles.content__banner}></div>
                <div className={styles.content__info}>ava + info</div>
                
            </div>
        )
    }
}

export default ProfileInfo
