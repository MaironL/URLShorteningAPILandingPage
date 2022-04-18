import * as S from './Hero.styles';
import working from 'infrastructure/assets/illustration-working.svg';

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroInnerContainer>
        <S.HeroImage src={working} alt='working illustration' />
        <S.HeroContent>
          <S.HeroTitle>More than just shorter links</S.HeroTitle>
          <S.HeroDescription>
            Build your brand’s recognition and get detailed insights on how your links are
            performing
          </S.HeroDescription>
          <S.HeroButton>Get Started</S.HeroButton>
        </S.HeroContent>
      </S.HeroInnerContainer>
    </S.Hero>
  );
};

export default Hero;
