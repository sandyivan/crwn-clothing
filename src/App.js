import React from 'react';
import './App.css';

//importing react route component for navigation to different pages in our app
import { Route, Switch } from 'react-router-dom';

//my page components
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

//header component this is our navigation at the top
import Header from './components/header/header';


const App = () => (
    <div>
      <Header />
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
)

export default App;
