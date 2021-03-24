import React from 'react';


//importing from firebase
import { auth } from '../../firebase/firebase.utils';

//importing our svg as a logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
//importing styles for this conponent 
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'; 

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
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/shop'>Contact</OptionLink>
               {
                   currentUser?
                   <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                   :
                   <OptionLink to='/signin'>Sign In</OptionLink>
               }
                <CartIcon />
            </OptionsContainer>
            {
                hidden? null:
                <CartDropdown />
            }
        </HeaderContainer>
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