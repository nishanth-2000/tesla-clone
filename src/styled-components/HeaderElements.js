import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const HeaderContainer = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: Capitalize;
    padding: 0 10px;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: Capitalize;
    margin-right: 15px;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const NavMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  padding: 30px;
  width: 350px;
  z-index: 100;
  list-style: none;
  text-align: left;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: 0.35s ease-in-out;

  li {
    padding: 12px 10px;
    border-radius: 15px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    a {
      font-weight: bold;
      opacity: 0.7;
    }
  }
`;

export const CustomCloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const CustomCloseIcon = styled(CloseIcon)`
  opacity: 0.7;
  cursor: pointer;
`;

export const BacgroundBlurFilter = styled.div`
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  transition: display 0.4s ease;
`;
