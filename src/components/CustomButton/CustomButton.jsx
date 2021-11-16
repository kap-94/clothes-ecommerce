import React from "react";

import * as S from "./CustomButton.styles";

export const CustomButton = ({ children, ...props }) => (
  <S.CustomButton {...props}>{children}</S.CustomButton>
);
