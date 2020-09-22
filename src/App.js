import React from 'react';
import './App.css';

//import function from redux
import { connect }  from 'react-redux';
//importing our user action
import { setCurrentUser } from './redux/user/user.action';


//importing react route component for navigation to different pages in our app
import { Route, Switch, Redirect } from 'react-router-dom';

//my page components
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

//firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';




//header component this is our navigation at the top
import Header from './components/header/header';


class App extends React.Component {


  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      } else {
        setCurrentUser(userAuth);
      }
      
      
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' render={() => this.props.currentUser? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});


const mapdDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(mapStateToProps, mapdDispatchToProps)(App);
