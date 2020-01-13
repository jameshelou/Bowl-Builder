import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const Toolbar = props => (
    <header className={styles.Toolbar}>
        <SideDrawerToggle clicked={props.clicked}/>
        <div className={[styles.Toolbar__Logo, styles.DesktopOnly].join(' ')}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);


export default Toolbar;