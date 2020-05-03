import React from 'react';

import styles from './Logo.module.css';
import logoImage from '../../assets/images/fishbowl_logo.png';

const Logo = props => (
  <div className={styles.Logo}>
    <img src={logoImage} alt='Fishbowl Logo'/>
    <h1>BOWL BUILDER</h1>
  </div>
);

export default Logo;