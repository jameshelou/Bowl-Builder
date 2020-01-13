import React from 'react';

import styles from './Spinner.module.css';

const Spinner = props => {
    if (props.spinner1) {
        return (
            <div
                className={styles.Spinner1}>
                Loading...</div>
        );
    }
    else if (props.spinner2) {
        return (
            <div
                className={styles.Spinner2}>
                Loading...</div>
        );
    }
    else return null;
}

    

export default Spinner;