import React from 'react';

import style from './SideDrawerToggle.module.css';

const SideDrawerToggle = props => (
    <div
    className={style.SideDrawerToggle}
    onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default SideDrawerToggle;