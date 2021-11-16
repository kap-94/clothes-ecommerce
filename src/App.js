import { React, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { theme } from "./theme";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { selectCurrentUser } from "../src/redux/user/userSelectors";
import { setCurrentUser } from "../src/redux/user/userActions";

import Header from "../src/components/Header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "../src/pages/shop/ShopPage";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/SignInAndSignUpPage";
import CheckoutPage from "../src/pages/checkout/CheckoutPage";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
  unsubscribeFromAuth = null;
  state = { isOpen: false };

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <div className="App">
          <Sidebar toggle={toggle} isOpen={this.state.isOpen} />
          <Header toggle={toggle} />

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
            <Redirect to="/" />
          </Switch>

          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
