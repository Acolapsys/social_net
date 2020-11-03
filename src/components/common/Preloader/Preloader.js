import React from 'react'
import preloader from "../../../assets/images/loading.svg";
import styles from './Preloader.module.css'

 const Preloader = (props) => {
 return <>
    <img className={styles.preloader} src={preloader} alt="Loading"/>
    </>
}

export default Preloader