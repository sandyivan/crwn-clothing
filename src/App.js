import React from 'react';
import './App.css';

//importing react route component for navigation to different pages in our app
import { Route, Switch } from 'react-router-dom';

//my page components
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

//firebase
import {auth} from './firebase/firebase.utils';


//header component this is our navigation at the top
import Header from './components/header/header';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }


  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })

    
  }


  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  }
}


export default App;
