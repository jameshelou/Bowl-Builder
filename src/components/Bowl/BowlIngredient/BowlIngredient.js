import React from 'react';
import PropType from 'prop-types';

const BowlIngredient = props => {
  let ingredient = null;

  const inlineStyle = {
    border: '2px solid blue',
    fontSize: '1rem',
    padding: '12px'
  }

  switch (props.ingredient) {
    case 'brownRiceAndCabbage':
      ingredient = <div style={inlineStyle}>Brown Rice & Cabbage</div>
      break;
    case 'brownRice':
      ingredient = <div style={inlineStyle}>Brown Rice</div>
      break;
    case 'sushiRice':
      ingredient = <div style={inlineStyle}>Sushi Rice</div>
      break;
    default:
      ingredient = null;
  }

  return ingredient;
}

BowlIngredient.propTypes = {
  ingredient: PropType.string.isRequired
}

export default BowlIngredient;