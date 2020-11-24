import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import { setCurrentUser } from './redux/User/user-actions';

function App({setCurrentUser,currentUser}) {
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
      })
      return ()=> unSubscribeFromAuth()
      
    },[])
    console.log(currentUser,'ues')
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" 
          render={()=> currentUser ? 
            (<Redirect to='/'/>):
            (<SignInSignUpPage/>)
          }
        />
      </Switch>
    </div>
  );  
}

const mapStateToProps = ({user:{currentUser}})=>({
  currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
