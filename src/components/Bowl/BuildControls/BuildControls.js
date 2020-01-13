import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'brown rice & cabbage', type: 'brownRiceAndCabbage' },
    { label: 'brown rice', type: 'brownRice' },
    { label: 'sushi rice', type: 'sushiRice' }
]

const BuildControls = props => (
    <div className={styles.BuildControls}>
        <p className={styles.Price}>${props.totalPrice.toFixed(2)}</p>

        {controls.map(c =>
            <BuildControl
                key={c.label}
                label={c.label}
                addIngredient={() => props.addIngredient(c.type)}
                removeIngredient={() => props.removeIngredient(c.type)}
                disabledInfo={props.disabledInfo[c.type]} />
        )}

        <button 
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.makePurchase}>ORDER NOW</button>
    </div>
);

export default BuildControls;