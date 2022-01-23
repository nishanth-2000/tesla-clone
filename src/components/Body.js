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
import Fade from "react-reveal/Fade";

export default function Body({
  index,
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </ItemText>
      </Fade>
      <ButtonContainer>
        <Fade bottom delay={500}>
          <ButtonGroup>
            <CustomButton>{leftBtnText}</CustomButton>
            {rightBtnText && <RightButton>{rightBtnText} </RightButton>}
          </ButtonGroup>
        </Fade>
        {index === 0 && <DownArrow src="images/down-arrow.svg" />}
      </ButtonContainer>
    </Wrap>
  );
}
