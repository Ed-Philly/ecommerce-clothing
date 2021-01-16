import React,{useState,useEffect} from 'react';
import './cart-dropdown.scss'
import { useSelector } from "react-redux";
import CustomButton from '../custom-button/custom-button';

const CartDropdown = () => {

    
    const cartState = useSelector(state => state.cart.cartItems)
    const [cart,setCartIn] = useState([])

    useEffect(()=>{
        setCartIn(cartState)
        
    },[cartState])



    const cartItems = cart.map((item,i) =>{
    
      return  (<div key={i}>
            <h3>name: {item.name}</h3>
            <p>price:£ {item.price}</p>
            <p>id:{item.id}</p>
            <p>quantity: {item.quantity}</p>
            <hr/>
        </div>
    )})

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