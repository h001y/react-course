import React from 'react';
import styles from './index.css';

const Loader = () => (
    <div className={styles.LoaderContainer}>
        <div className={styles.LoaderYellow}></div>
        <div className={styles.LoaderRed}></div>
        <div className={styles.LoaderBlue}></div>
        <div className={styles.LoaderViolet}></div>
    </div>
)

export default Loader;