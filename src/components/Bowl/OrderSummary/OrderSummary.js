import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import { controls } from '../../../utilities/constants';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] componentWillUpdate');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(key => {
        return (
          <li key={key}><strong>{controls.filter(obj => obj.type === key)[0].label}</strong>: {this.props.ingredients[key]}</li>
        );
      });

    return (
      <Aux>
        <h1>Your Order</h1>
        <p>Review your delicious bowl below:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Submit Order?</p>
        <Button clicked={this.props.submitOrder} classes='Success'>SUBMIT</Button>
        <Button clicked={this.props.cancelOrder} classes='Danger'>CANCEL</Button>
      </Aux>
    );
  };
}

export default OrderSummary;