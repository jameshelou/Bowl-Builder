import React from 'react';
import styles from './BuildControls.module.css';
import BuildStep from './BuildStep/BuildStep';

const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <BuildStep
        title="STEP 1 CHOOSE A BASE"
        name="step1"
        onChange={props.onChange}
        toggleIngredient={props.toggleIngredient}
        disabledInfo={props.disabledInfo}/>

      <BuildStep 
        title="STEP 2 CHOOSE A PROTEIN" 
        name="step2"
        onChange={props.onChange}
        toggleIngredient={props.toggleIngredient}
        disabledInfo={props.disabledInfo}/>

      <BuildStep 
        title="STEP 3 ADD SOME VEG (5)"
        name="step3"
        onChange={props.onChange}
        toggleIngredient={props.toggleIngredient}
        disabledInfo={props.disabledInfo}/>
      
      <p className={styles.Price}>${props.totalPrice.toFixed(2)}</p>
      <button 
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.makePurchase}>ORDER NOW</button>
    </div>
  )
};

export default BuildControls;