import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import * as S from "./Header.styles";

const Header = ({ currentUser, hidden, toggle }) => {
  return (
    <S.Header bg="#1a1a1a">
      <S.HeaderWrapper>
        <S.LogoContainer style={{ textDecoration: "none" }} to="/">
          <div
            style={{ color: "white", textDecoration: "none", fontSize: "3rem" }}
          >
            Urban
          </div>
        </S.LogoContainer>

        <S.Tabs>
          <S.Tab exact to="/">
            HOME
          </S.Tab>

          <S.Tab exact to="/shop">
            COLLECTIONS
          </S.Tab>

          <S.Tab exact to="/contact">
            CONTACT
          </S.Tab>

          <S.UserOptions>
            {currentUser ? (
              <S.Tab as="div" onClick={() => auth.signOut()}>
                SIGN OUT
              </S.Tab>
            ) : (
              <S.Tab to="/signin">SIGN IN</S.Tab>
            )}
          </S.UserOptions>
        </S.Tabs>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
          }}
        >
          <CartIcon />
          <S.HamburgerMenu onClick={toggle} />
        </div>

        {hidden ? null : <CartDropdown />}
      </S.HeaderWrapper>
    </S.Header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
