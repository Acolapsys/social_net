import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.css'

export class DialogItem extends Component {
  render() {
    return (
      <div className={styles.dialog}>
        <NavLink to={"/dialogs/" + this.props.id} activeClassName={styles.active}>
          {this.props.name}
        </NavLink>
      </div>
    );
  }
}

export default DialogItem;
