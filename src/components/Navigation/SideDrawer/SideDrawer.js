import React from 'react';

import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = props => {
    let assignedClasses = [styles.SideDrawer];
    props.show ? assignedClasses.push(styles.Open) : assignedClasses.push(styles.Close);

    return (
        <Aux>
            <Backdrop 
            show={props.show}
            backdropClicked={props.closed}/>
            <div className={assignedClasses.join(' ')}>
                <div className={styles.SideDrawer__Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
};

export default SideDrawer;