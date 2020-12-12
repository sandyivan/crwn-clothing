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

/* connect is a higher order component 
that lets us modify our components to have access 
to things related to redux. 
*/ 
import { connect }  from 'react-redux';

import {createStructuredSelector} from "reselect";

//importing our selector
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from '../../redux/cart/cart.selectors';

//importing our cart dropdown component here
import CartDropdown from '../cart-dropdown/cart-dropdown';

// we are getting this  currentUser from our mapStateToProps function as you can see below 
const Header = ({currentUser, hidden}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className="logo"/>
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
    
/*
mapStateToProps allow us to access the root reducer. this function has "state"(state is our root reducer) as its argument/parameter 
this function returns an object where the property name is what property we want to pass in to this component, in our 
case we want this component to have access to currentUser property. 
*/
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

/*
 we use mapStateToProps and connect anywhere we need properties 
 from our reducers, we gonna write this pattern a lot for our future component s 
*/


export default connect(mapStateToProps)(Header);