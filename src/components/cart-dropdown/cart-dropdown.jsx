import React,{useState,useEffect} from 'react';
import './cart-dropdown.scss'
import { useSelector } from "react-redux";
import CustomButton from '../custom-button/custom-button';
import CartItems from '../cart-item/cart-item';

const CartDropdown = () => {

    
    const cartState = useSelector(state => state.cart.cartItems)
    const [cart,setCartIn] = useState([])

    useEffect(()=>{
        setCartIn(cartState)
        
    },[cartState])



    const cartItems = cart.map(cartItem => <CartItems key={cartItem.id} item={cartItem}/>)

    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems}
                
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
export default CartDropdown;