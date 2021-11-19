import React from "react";

import HomeImage from "../HomeImage/HomeImage.jsx";
import { CustomLinkButton } from "../CustomLinkButton/CustomLinkButton";

import * as S from "./InfoSection.styles";

const InfoSection = ({
  buttonLabel,
  darkText,
  description,
  headLine,
  id,
  imgStart,
  lightBg,
  lightText,
  topLine,
}) => {
  return (
    <S.InfoSection lightBg={lightBg} id={id}>
      <S.InfoWrapper>
        <S.InfoRow imgStart={imgStart}>
          <S.Column1>
            <S.TextWrapper>
              <S.TopLine>{topLine}</S.TopLine>
              <S.Heading lightText={lightText}>{headLine}</S.Heading>
              <S.Subtitle darkText={darkText}>{description}</S.Subtitle>
              <S.BtnWrap>
                <CustomLinkButton to="/shop">{buttonLabel}</CustomLinkButton>
              </S.BtnWrap>
            </S.TextWrapper>
          </S.Column1>

          <S.Column2>
            <S.ImgWrap>
              <HomeImage />
            </S.ImgWrap>
          </S.Column2>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoSection>
  );
};

export default InfoSection;
