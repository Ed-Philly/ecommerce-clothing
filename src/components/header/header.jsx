import React from 'react';
import {Link} from 'react-router-dom'


import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'

const Header = () => {
    return ( 
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option border-link">SHOP</Link>
                <Link className="option border-link">CONTACT</Link>
            </div>
        </div>
     );
}
 
export default Header;