import React from 'react';
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util'
import {useSelector}  from 'react-redux'


import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'

const Header = () => {

    const currentUser = useSelector( state=>state.user.currentUser)
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

                {
                    currentUser ? <div className='avatar'>
                        <div className="avatar-text">{currentUser.displayName.slice(0,1).toUpperCase()}</div>
                    </div>
                    :""
                }
                
            </div>
        </div>
     );
}
 
export default Header;