import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

//import:cart action creator
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import "./cart-icon.scss";



const CartIcon = () => {
    

    //const reducer = (accumulator, currentValue) => (accumulator + currentValue.quantity);
    const itemCount = useSelector( ( selectCartItemsCount))
    console.log('i am being called')
    
    const dispatch = useDispatch()

    return ( 
        <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    );
}
 
export default CartIcon;