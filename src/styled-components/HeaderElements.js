import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

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
    margin-right: 14px;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
