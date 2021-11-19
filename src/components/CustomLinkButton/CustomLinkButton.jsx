import React from "react";

import * as S from "./CustomLinkButton.styles";

export const CustomLinkButton = ({ children, ...props }) => (
  <S.CustomLinkButton {...props}>{children}</S.CustomLinkButton>
);
