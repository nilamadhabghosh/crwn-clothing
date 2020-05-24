import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.componant";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

const Contact = () => (
  <div>
    <h1>Contact PAGE</h1>
  </div>
);
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                  <SignInAndSignUpPage />
                )
            }
          />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

// Root Reducer
const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
