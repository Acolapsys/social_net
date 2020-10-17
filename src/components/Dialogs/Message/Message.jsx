import React, { Component } from 'react'
import styles from './Message.module.css'

export class Message extends Component {
    render() {
        return (
            <div className={styles.message}>{this.props.message}</div>
        )
    }
}

export default Message
