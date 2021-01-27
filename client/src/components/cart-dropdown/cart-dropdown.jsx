import React from 'react';
import './cart-dropdown.scss'
import { useSelector,useDispatch } from "react-redux";
import CustomButton from '../custom-button/custom-button';
import CartItems from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selector'
import {useHistory} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = () => {

    //using reselector type selector for memoization 
    const cartItems = useSelector(selectCartItems)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(toggleCartHidden())  
        history.push("/checkout")
       
    }

    const cartItemsList = cartItems.length ? 
                cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem}/>) 
                :
                <span className="empty-message">Your cart is empty</span>


    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItemsList}
                
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
export default CartDropdown;