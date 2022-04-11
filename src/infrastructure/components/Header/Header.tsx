import * as S from './Header.styles';
import logo from 'infrastructure/assets/logo.svg';

const Header = () => {
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
          <S.DropDownButton />
        </S.HeaderRightContainer>
      </S.HeaderInnerContainer>
    </S.Header>
  );
};

export default Header;
