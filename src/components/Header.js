import React, { useState } from "react";
import {
  CustomMenu,
  HeaderContainer,
  Menu,
  RightMenu,
  NavMenu,
  CustomCloseWrap,
  CustomCloseIcon,
  BacgroundBlurFilter,
} from "../styled-components";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <a>
        <img src="images/logo.svg" alt="" />
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
        <CustomMenu onClick={() => setIsMenuOpen(true)} />
      </RightMenu>
      <BacgroundBlurFilter isMenuOpen={isMenuOpen} />

      <NavMenu isOpen={isMenuOpen}>
        <CustomCloseWrap>
          <CustomCloseIcon onClick={() => setIsMenuOpen(false)} />
        </CustomCloseWrap>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
      </NavMenu>
    </HeaderContainer>
  );
}
