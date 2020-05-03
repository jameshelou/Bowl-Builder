import React from 'react';
import styles from './BuildControls.module.css';
import BuildStep from './BuildStep/BuildStep';

const BuildControls = props => (
  <div className={styles.BuildControls}>
    <BuildStep 
      title="STEP 1 CHOOSE A BASE" 
      toggleIngredient={props.toggleIngredient} 
      disabledInfo={props.disabledInfo}/>
    
    <p className={styles.Price}>${props.totalPrice.toFixed(2)}</p>
    
    <button 
    className={styles.OrderButton}
    disabled={!props.purchasable}
    onClick={props.makePurchase}>ORDER NOW</button>
  </div>
);

export default BuildControls;