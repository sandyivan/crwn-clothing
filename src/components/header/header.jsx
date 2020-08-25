import React from 'react';

//importing Link component from reatc router for navigating to different pages
import { Link } from 'react-router-dom';

//importing our svg as a logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
//importing styles for this conponent 
import './header.scss';


const Header = () => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
            </div>
        </div>
    )
}

export default Header;