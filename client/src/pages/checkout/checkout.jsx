import React from 'react';
import './checkout.scss'
import {useSelector} from "react-redux"


import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckOutButton from '../../components/stripe-button/stripe-button';


const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems)
    const cartItemsTotal = useSelector(selectCartTotal)
    

    return ( 
    
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        
        <div className="total">
            <span>total: ${cartItemsTotal}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - exp -any 3 digit - cvv -any future date
        </div>
        <StripeCheckOutButton price={cartItemsTotal}/>
    </div> );
}
 
export default CheckoutPage;