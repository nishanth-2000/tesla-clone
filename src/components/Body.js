import React from "react";
import {
  ItemText,
  Wrap,
  CustomButton,
  ButtonGroup,
  RightButton,
  DownArrow,
  ButtonContainer,
} from "../styled-components";
export default function Body({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <>
      <Wrap bgImage={backgroundImage}>
        <ItemText>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </ItemText>
        <ButtonContainer>
          <ButtonGroup>
            <CustomButton>{leftBtnText}</CustomButton>
            {rightBtnText && <RightButton>{rightBtnText} </RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </ButtonContainer>
      </Wrap>
    </>
  );
}
