import React from 'react';

import styles from './Button.module.css';

const Button = props => (
    <button 
        className={[styles.Button, styles[props.classes]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default Button;