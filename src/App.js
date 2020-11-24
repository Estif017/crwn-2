import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';

function App() {
  const [currentUser,setCurrentUser]=useState(null)
  let unSubscribeFromAuth=null
  useEffect(()=>{
    // eslint-disable-next-line
      unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
          const userRef=await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapshot=>{
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          })
        }else{
          setCurrentUser(userAuth)
        }
        console.log(currentUser);
      })
      return ()=> unSubscribeFromAuth()
      
    },[])
  return (
    <div >
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInSignUpPage}/>
      </Switch>
    </div>
  );  
}

export default App;
