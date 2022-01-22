import React from "react";
import {
  CustomMenu,
  HeaderContainer,
  Menu,
  RightMenu,
} from "../styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu />
      </RightMenu>
    </HeaderContainer>
  );
}
