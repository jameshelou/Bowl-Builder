import React from 'react';
import styles from './BuildStep.module.css';
import BuildControl from '../BuildControl/BuildControl';
import { controls } from '../../../../utilities/constants';

const BuildStep = props => {
  return (
    <div className={styles.BuildStep}>
      <h3>{props.title}</h3>
      {controls.map(c =>
        <BuildControl
          key={c.label}
          label={c.label}
          name={props.name}
          onChange={e => props.onChange(c.type, e)}
          disabledInfo={props.disabledInfo[c.type]} />
      )}
    </div>
  )
}

export default BuildStep;