import React from 'react';

import {auth} from '../../firebase/firebase.util'
import {useSelector}  from 'react-redux'



import {ReactComponent as Logo} from '../../assets/crown.svg'

import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from './header.style'

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = () => {

    const currentUser = useSelector( state => state.user.currentUser)
    const cartHidden = useSelector( state => state.cart.hidden)
    return ( 
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo className='logo'/>
               
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to='/'>CONTACT</OptionLink>

                {currentUser ?
                    <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink> 
                }
                <CartIcon/>
            </OptionsContainer>
            {
                !cartHidden && <CartDropdown/>
            }
            
        </HeaderContainer>
     );
}
 
export default Header;