import * as S from './Footer.styles';
import logo from 'infrastructure/assets/logo.svg';
import iconFacebook from 'infrastructure/assets/icon-facebook.svg';
import iconTwitter from 'infrastructure/assets/icon-twitter.svg';
import iconInstagram from 'infrastructure/assets/icon-instagram.svg';
import iconPinterest from 'infrastructure/assets/icon-pinterest.svg';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInner>
        <S.FooterLogo src={logo} />
        <S.FooterContent>
          <S.FooterCol>
            <S.FooterColTitle>Features</S.FooterColTitle>
            <S.FooterColText href='#'>Link Shortening</S.FooterColText>
            <S.FooterColText href='#'>Branded Links</S.FooterColText>
            <S.FooterColText href='#'>Analytics</S.FooterColText>
          </S.FooterCol>
          <S.FooterCol>
            <S.FooterColTitle>Resources</S.FooterColTitle>
            <S.FooterColText href='#'>Blog</S.FooterColText>
            <S.FooterColText href='#'>Developers</S.FooterColText>
            <S.FooterColText href='#'>Support</S.FooterColText>
          </S.FooterCol>
          <S.FooterCol>
            <S.FooterColTitle>Company</S.FooterColTitle>
            <S.FooterColText href='#'>About</S.FooterColText>
            <S.FooterColText href='#'>Our Team</S.FooterColText>
            <S.FooterColText href='#'>Careers</S.FooterColText>
            <S.FooterColText href='#'>Contact</S.FooterColText>
          </S.FooterCol>
          <S.FooterColLinks>
            <S.SocialLinks href='#'>
              <S.SocialIcon src={iconFacebook} alt='Facebook' />
            </S.SocialLinks>
            <S.SocialLinks href='#'>
              <S.SocialIcon src={iconTwitter} alt='Twitter' />
            </S.SocialLinks>
            <S.SocialLinks href='#'>
              <S.SocialIcon src={iconPinterest} alt='Pinterest' />
            </S.SocialLinks>
            <S.SocialLinks href='#'>
              <S.SocialIcon src={iconInstagram} alt='Instagram' />
            </S.SocialLinks>
          </S.FooterColLinks>
        </S.FooterContent>
      </S.FooterInner>

      <S.attribution>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://mairon-romero.netlify.app/' target='_blank' rel='noreferrer'>
          Mairon Romero
        </a>
        .
      </S.attribution>
    </S.Footer>
  );
};

export default Footer;
