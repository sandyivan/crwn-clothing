import React from 'react';
import './App.css';

/* connect is a higher order component 
that lets us modify our components to have access 
to things related to redux. 
*/ 
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
        //we are checking if our database is updated in that reference(userref) with any new data. 
        //the onSnapshot is similar to onAuthStateChanged,
        // it will give us an snapshot object representing the data that is currently in  our database
        //on the snapshot object is where we are going to get the data related to this user that we currently jus possibly stored
        //, if its new authintacation or the data the is related to the user that already stored in our database
        // we are just listening to any change in userRef at the same time we are getting the first state of that data
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
    // render inside our route is a JS invokation that determines what component to render, its same with our render() in react 
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    )
  }
}
 
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

// dispatch() is a way for redux to know that whatever you're passing me, whatever object you're passing me is going 
// to be an action object that i'm going to pass to every reducer so our user action is a function that gets the user but returns an 
// action object
const mapdDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
 we use mapStateToProps and connect anywhere we need properties 
 from our reducers, we gonna write this pattern a lot for our future component 
*/

export default connect(mapStateToProps, mapdDispatchToProps)(App);
