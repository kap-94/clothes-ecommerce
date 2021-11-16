import React from "react";

import * as S from "./WithSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
