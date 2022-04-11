import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { InnerContainer } from 'globalStyle';

export const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;

  @media screen and (min-width: 600px) {
    padding-top: 65px;
  }
`;

export const HeaderInnerContainer = styled(InnerContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: inherit;
`;

export const HeaderLogo = styled.img`
  max-height: 33px;
  width: auto;
  margin-right: min(45px, 2.3rem);
`;

export const HeaderNav = styled.nav`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const HeaderNavItem = styled.li`
  margin-right: min(35px, 1.8rem);
`;
export const HeaderNavLink = styled(Link)`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  color: hsl(257, 7%, 63%);
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: inherit;
`;

export const DropDownButton = styled(RiMenuFill)`
  cursor: pointer;
  font-size: 2.2rem;
  color: hsl(257, 7%, 63%);

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: hsl(257, 7%, 63%);
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;
  }
`;

export const SignupButton = styled.button`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    cursor: pointer;
    border: none;
    color: white;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    padding: 8px 25px;
    border-radius: 30px;
    background-color: hsl(180, 66%, 49%);
    margin-left: 40px;
  }
`;
