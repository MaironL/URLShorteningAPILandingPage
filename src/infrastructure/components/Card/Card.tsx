import * as S from './Card.styles';

interface ICard {
  src: string;
  title: string;
  text: string;
  top?: string;
  left?: string;
}

const Card = ({ src, title, text, top, left }: ICard) => {
  return (
    <S.Card top={top} left={left}>
      <S.CardImg src={src} alt={title} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardText>{text}</S.CardText>
    </S.Card>
  );
};

export default Card;
