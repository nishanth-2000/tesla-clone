import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${(props) =>
    props.bgImage
      ? `url(/images/${props.bgImage})`
      : `url(/images/model-s.jpg")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-center: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const CustomButton = styled.div`
  color: #fff;
  background-color: #000;
  height: 50px;
  width: 250px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  cursor: pointer;
  margin: 10px;
`;
export const RightButton = styled(CustomButton)`
  color: #000;
  background-color: #fff;
`;

export const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  overflow-y: hidden;
`;
