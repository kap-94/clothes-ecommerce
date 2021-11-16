import React from "react";

import * as S from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <S.FormInputGroup>
    <S.FormInput onChange={handleChange} {...props} />

    {label ? (
      <S.FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </S.FormInputLabel>
    ) : null}
  </S.FormInputGroup>
);

export default FormInput;
