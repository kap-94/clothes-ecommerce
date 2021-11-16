import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import * as S from "./Sidebar.styles";

const Sidebar = ({ currentUser, isOpen, toggle, collections }) => {
  return (
    <S.Sidebar isOpen={isOpen} onClick={toggle}>
      <S.Icon>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarNav>
        <S.SidebarLink to="/">Home</S.SidebarLink>
        {collections.map((collection) => (
          <S.SidebarLink
            key={collection.id}
            to={`/shop/${collection.routeName}`}
          >
            {collection.title}
          </S.SidebarLink>
        ))}

        <div style={{ marginTop: "10rem" }}>
          {currentUser ? (
            <S.SidebarLink as="div" onClick={() => auth.signOut()}>
              Sign Out
            </S.SidebarLink>
          ) : (
            <S.SidebarLink to="/signin">Sign In</S.SidebarLink>
          )}
        </div>
      </S.SidebarNav>
    </S.Sidebar>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(Sidebar);
