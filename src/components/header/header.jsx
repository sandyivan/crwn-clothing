import React from 'react';

//importing Link component from reatc router for navigating to different pages
import { Link } from 'react-router-dom';

//importing from firebase
import { auth } from '../../firebase/firebase.utils';

//importing our svg as a logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
//importing styles for this conponent 
import './header.scss';

//importing the cart component
import CartIcon from '../cart-icon/cart-icon';

//import function from redux
import { connect }  from 'react-redux';

//importing our cart dropdown component here
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header = ({currentUser, hidden}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
               {
                   currentUser?
                   <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                   :
                   <Link className='option' to='/signin'>Sign In</Link>
               }
                <CartIcon />
            </div>
            {
                hidden? null:
                <CartDropdown />
            }
           
        </div>
    )
}


const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);