import React from 'react';

import styles from './Bowl.module.css';
import BowlIngredient from './BowlIngredient/BowlIngredient';

const Bowl = props => {
    let transformedIngredients = [];

    for (let key in props.ingredients) {
        for (let i = 0; i < props.ingredients[key]; i++) {
            transformedIngredients.push( <BowlIngredient key={key + i} ingredient={key}/> )
        }
    }

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Start creating your bowl!</p>
    }

    return (
        <div className={styles.Bowl}>
            {transformedIngredients}
        </div>
    )
}

export default Bowl;