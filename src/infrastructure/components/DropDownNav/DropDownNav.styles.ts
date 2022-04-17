import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DropDownNav = styled.dialog`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 150;
  border: none;
  background-color: hsl(257, 27%, 26%);
  width: min(90%, 340px);
  border-radius: 10px;

  @media screen and (min-width: 600px) {
    left: auto;
    right: 50px;
    transform: translateX(0%);
  }
`;

export const NavContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 100;
  padding: 40px 20px;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid hsl(257, 7%, 45%);
`;

export const HeaderNavItem = styled.li`
  margin-bottom: 30px;
`;
export const HeaderNavLink = styled(Link)`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 18px;
  color: whitesmoke;
  transition: all 0.3s ease;
`;

export const LoginButton = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: whitesmoke;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 18px;
  margin: 30px auto;
  transition: all 0.3s ease;
`;

export const SignupButton = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  color: white;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  padding: 12px 25px;
  border-radius: 30px;
  background-color: hsl(180, 66%, 49%);
  margin: 30px auto;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(180, 66%, 69%);
  }
`;
