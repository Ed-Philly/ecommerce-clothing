import React from 'react';
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util'


import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'

const Header = ({currentUser}) => {
    return ( 
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option border-link" to="/shop">SHOP</Link>
                <Link className="option border-link" to='/'>CONTACT</Link>

                {
                    currentUser ?
                    <div className="option border-link" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option border-link" to="/signin">SIGN IN</Link>
                }
                
            </div>
        </div>
     );
}
 
export default Header;