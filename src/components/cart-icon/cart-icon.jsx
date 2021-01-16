import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

//import:cart action creator
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import "./cart-icon.scss";



const CartIcon = () => {
    const cart = useSelector(state=>state.cart.cartItems)

    const reducer = (accumulator, currentValue) => (accumulator + currentValue.quantity);
    const [total,setTotal] = useState(0)

    useEffect(()=>{
       if(cart){
            setTotal(cart.reduce(reducer,0))
       }
       console.log(total)
      
    });
    
    const dispatch = useDispatch()

    return ( 
        <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">
                {total}
            </span>
        </div>
    );
}
 
export default CartIcon;