import * as S from './Footer.styles';

const Footer = () => {
  return (
    <footer>
      <div>
        Features Link Shortening Branded Links Analytics Resources Blog Developers Support
        Company About Our Team Careers Contact
      </div>
      <S.attribution>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='https://mairon-romero.netlify.app/'>Mairon Romero</a>.
      </S.attribution>
    </footer>
  );
};

export default Footer;
