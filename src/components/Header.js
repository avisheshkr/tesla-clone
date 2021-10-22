import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { BsGlobe2 } from "react-icons/bs";

const Header = ({ isMobileOn, openMobileMenu, closeMenu }) => {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <img src="images/logo.svg" alt="logo" />
        </Logo>
        <LeftMenu>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </LeftMenu>
        <RightMenu>
          <li>Shop</li>
          <li>Account</li>
          <li onClick={openMobileMenu}>Menu</li>
        </RightMenu>
        <MobileMenu onClick={openMobileMenu}>Menu</MobileMenu>

        <MenuBar isMobileOn={isMobileOn}>
          <CloseBtn onClick={closeMenu}>
            <GrClose />
          </CloseBtn>

          <Menu>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
            <li>Existing inventory</li>
            <li>Used inventory</li>
            <li>trade-in</li>
            <li>test drive</li>
            <li>powerwall</li>
            <li>commercial energy</li>
            <li>utilities</li>
            <li>charging</li>
            <li>find us</li>
            <li>support</li>
            <li>investor relations</li>
            <li>shop</li>
            <li>account</li>
            <li>more</li>

            <li>
              <BsGlobe2 style={{ fontSize: "20px" }} />
              <Language>
                <h4>United States</h4>
                <p>English</p>
              </Language>
            </li>
          </Menu>
        </MenuBar>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
`;

const Logo = styled.div``;

const LeftMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    color: #000;
    padding: 7px 15px;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
  li:hover {
    background-color: rgba(var(--color), 0.1);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled(LeftMenu)`
  justify-content: flex-end;
`;

const MobileMenu = styled.div`
  color: #000;
  padding: 7px 15px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  background-color: rgba(var(--color), 0.1);
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const MenuBar = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 310px;
  padding: 0 0 0 50px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) =>
    props.isMobileOn ? "translateX(0)" : "translateX(1500px)"};
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  align-self: flex-end;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: rgba(var(--color), 0.1);
    border: 1px solid var(--secondary-color);
  }
`;

const Menu = styled.ul`
  overflow-y: scroll;
  padding: 100px 0 200px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    text-transform: capitalize;
    margin-right: 50px;
    padding: 7px 15px;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
  li:last-child {
    display: flex;
    gap: 10px;
  }

  li:hover {
    background-color: rgba(var(--color), 0.1);
  }
`;

const Language = styled.div`
  h4 {
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }
  p {
    font-size: 13px;
    color: var(--secondary-color);
    margin-top: 5px;
    padding: 2px;
    width: 50px;
    transition: all 0.4s ease-in-out;
  }
  p:hover {
    border-bottom: 1px solid #000;
  }
`;
