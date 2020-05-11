import React from 'react';
import { Checkbox } from '@material-ui/core';
import styles from './BuildControl.module.css';

const BuildControl = props => (
  <div className={styles.BuildControl}>
    <label className={styles.Label}>{props.label}</label>
    <Checkbox
      name={props.name}
      onClick={props.toggleIngredient} 
      onChange={props.onChange}/>
  </div>
);

export default BuildControl;