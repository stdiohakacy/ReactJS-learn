import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage.component";
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.components";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // DocumentReference
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shops' component={ShopPage} />
          <Route path='/checkout' exact component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={
              () => this.props.currentUser
              ? (<Redirect to='/' />)
              : (<SignInAndSignUpPage />)
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

export default connect(mapStateToProps, mapDispatchToProps)(App)