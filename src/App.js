import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInSignUpPage}/>
      </Switch>
    </div>
  );  
}

export default App;
