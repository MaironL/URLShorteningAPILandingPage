import * as S from './Description.styles';
import Card from 'infrastructure/components/Card/Card';
import brandIcon from 'infrastructure/assets/icon-brand-recognition.svg';
import detailsIcon from 'infrastructure/assets/icon-detailed-records.svg';
import fullyCustomIcon from 'infrastructure/assets/icon-fully-customizable.svg';

const Description = () => {
  return (
    <S.Description>
      <S.DescriptionInnerContainer>
        <S.DescriptionPresentation>
          <S.DescriptionTitle>Advanced Statistics</S.DescriptionTitle>
          <S.DescriptionText>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </S.DescriptionText>
        </S.DescriptionPresentation>
        <S.DescriptionCardsContainer>
          <Card
            top='-50px'
            left='-130px'
            src={brandIcon}
            title='Brand Recognition'
            text='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
          />
          <Card
            src={detailsIcon}
            title='Detailed Records'
            text='Gain insights into who is clicking your links.  Knowing when and where people engage with your content helps inform better decisions.'
          />
          <Card
            top='50px'
            left='150px'
            src={fullyCustomIcon}
            title='Fully Customizable'
            text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
          />
          <S.CyanLine />
        </S.DescriptionCardsContainer>
      </S.DescriptionInnerContainer>
    </S.Description>
  );
};

export default Description;
