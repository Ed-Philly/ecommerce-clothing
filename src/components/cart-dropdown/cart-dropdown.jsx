import React from 'react';
import './cart-dropdown.scss'
import { useSelector } from "react-redux";
import CustomButton from '../custom-button/custom-button';
import CartItems from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selector'

const CartDropdown = () => {

    //using reselector type selector for memoization 
    const cartItems = useSelector(selectCartItems)
    

    const cartItemsList = cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem}/>)

    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItemsList}
                
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
export default CartDropdown;