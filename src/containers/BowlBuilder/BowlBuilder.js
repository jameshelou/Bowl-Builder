import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Bowl from '../../components/Bowl/Bowl';
import BuildControls from '../../components/Bowl/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Bowl/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    brownRiceAndCabbage: 10,
    brownRice: 11,
    sushiRice: 12
};

class BowlBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get('https://react-bowl-builder.firebaseio.com/ingredients.json')
             .then(response => this.setState({ingredients: response.data}))
             .catch(error => this.setState({error: error}));
    }

    updatePurchasable = () => {
        const ingredients = {
            ...this.state.ingredients
        }
        for (let key in ingredients) {
            if (ingredients[key] !== 0) {
                this.setState({ purchasable: true });
                return;
            }
        }
        this.setState({ purchasable: false });
    }

    addIngredientHandler = ingredient => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[ingredient] = updatedIngredients[ingredient] + 1;

        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[ingredient];
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice}, () => this.updatePurchasable());
    }

    removeIngredientHandler = ingredient => {
        const updatedIngredients = {
            ...this.state.ingredients
        }

        if (updatedIngredients[ingredient] <= 0) {
            return;
        } else {
            updatedIngredients[ingredient] = updatedIngredients[ingredient] - 1;
            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[ingredient];
            this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice }, () => this.updatePurchasable());
        }
    }

    makePurchaseHandler = () => {
        this.setState( {purchasing: true} );
    }

    cancelPurchaseHandler = () => {
        this.setState( {purchasing: false} );
    }

    submitPurchaseHandler = () => {
        this.setState({loading: true});

        // in prod you would calculate final price in the back-end
        const orderData = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'James Helou',
                cust_id: 100
            }
        }

        axios.post('/orders.json', orderData)
            .then(response => this.setState({loading: false, purchasing: false}))
            .catch(error => {
                console.log(error);
                this.setState({loading: false, purchasing: false});
            });
    }
 
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let bowlAndBuildControls = this.state.error ? <p>Ingredients cannot be fetched!</p> : <Spinner spinner2/>;
        if (this.state.ingredients) {
            bowlAndBuildControls = (
                <Aux>
                    <Bowl ingredients={this.state.ingredients} />

                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabledInfo={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        makePurchase={this.makePurchaseHandler} />
                </Aux>
            );

            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    submitOrder={this.submitPurchaseHandler}
                    cancelOrder={this.cancelPurchaseHandler}
                    totalPrice={this.state.totalPrice} />
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner spinner1/>;
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} backdropClicked={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Modal>

                {bowlAndBuildControls}
            </Aux>
        );
    }
}

export default withErrorHandler(BowlBuilder, axios);