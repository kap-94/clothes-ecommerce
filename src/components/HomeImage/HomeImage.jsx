import React from "react";

import image from "../../assets/hero-4.jpg";

import * as S from "./HomeImage.styles";

const HomeImage = () => {
  return (
    <S.HomeImage className="animate__animated animate__fadeIn">
      <S.Image
        src={image}
        alt="image"
        className="animate__animated animate__fadeIn"
      ></S.Image>
      <S.TextBox>
        Lorem ipsum lorem <br />
        Lorem ipsum lorem ipsum <br />
        Lorem ipsum lorem ipsum lorem
      </S.TextBox>
      <S.TextBoxSecondary>
        Lorem ipsum lorem ipsum <br />
        Lorem ipsum lorem
      </S.TextBoxSecondary>
    </S.HomeImage>
  );
};

export default HomeImage;
