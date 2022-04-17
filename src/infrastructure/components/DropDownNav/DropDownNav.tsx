import * as S from './DropDownNav.styles';

interface IdropDownNav {
  Modalref?: any;
}

const DropDownNav = ({ Modalref }: IdropDownNav) => {
  return (
    <S.DropDownNav ref={Modalref}>
      <S.NavContent>
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
        <S.LoginButton>Login</S.LoginButton>
        <S.SignupButton>Sign Up</S.SignupButton>
      </S.NavContent>
    </S.DropDownNav>
  );
};

export default DropDownNav;
