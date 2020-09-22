import React from 'react';

//importing Link component from reatc router for navigating to different pages
import { Link } from 'react-router-dom';

//importing from firebase
import { auth } from '../../firebase/firebase.utils';

//importing our svg as a logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
//importing styles for this conponent 
import './header.scss';

//import function from redux
import { connect }  from 'react-redux';


const Header = ({currentUser}) => {
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
                
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);