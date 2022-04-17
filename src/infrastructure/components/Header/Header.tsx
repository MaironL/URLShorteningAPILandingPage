import * as S from './Header.styles';
import logo from 'infrastructure/assets/logo.svg';
import DropDownNav from '../DropDownNav/DropDownNav';
import useModalShow from './useModalShow';

const Header = () => {
  const { Modal, showModal } = useModalShow();

  return (
    <S.Header>
      <S.HeaderInnerContainer>
        <S.HeaderLeftContainer>
          <S.HeaderLogo src={logo} alt='url-shortening-logo' />
          <S.HeaderNav>
            <S.HeaderNavList>
              <S.HeaderNavItem>
                <S.HeaderNavLink to='#Features'>Features</S.HeaderNavLink>
              </S.HeaderNavItem>
              <S.HeaderNavItem>
                <S.HeaderNavLink to='#Pricing'>Pricing</S.HeaderNavLink>
              </S.HeaderNavItem>
              <S.HeaderNavItem>
                <S.HeaderNavLink to='#Resources'>Resources</S.HeaderNavLink>
              </S.HeaderNavItem>
            </S.HeaderNavList>
          </S.HeaderNav>
        </S.HeaderLeftContainer>
        <S.HeaderRightContainer>
          <S.LoginButton>Login</S.LoginButton>
          <S.SignupButton>Sign Up</S.SignupButton>
          <S.DropDownButton onClick={showModal} />
        </S.HeaderRightContainer>
        <DropDownNav Modalref={Modal} />
      </S.HeaderInnerContainer>
    </S.Header>
  );
};

export default Header;
