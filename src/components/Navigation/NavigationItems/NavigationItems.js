import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = props => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>Bowl Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems