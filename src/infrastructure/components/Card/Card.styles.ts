import styled from 'styled-components';

interface ICard {
  top?: string;
  left?: string;
}

export const Card = styled.div<ICard>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 90px;
  padding: 0 28px;
  z-index: 100;
  width: min(100%, 350px);

  @media screen and (min-width: 900px) {
    left: ${(props) => (props.left ? props.left : '0')};
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 0px;
    left: 0;
    top: ${(props) => (props.top ? props.top : '0')};
  }
`;

export const CardImg = styled.img`
  position: relative;
  top: -42.5px;
  border-radius: 50%;
  background-color: hsl(257, 27%, 26%);
  width: 85px;
  height: 85px;
  object-fit: scale-down;

  @media screen and (min-width: 1200px) {
    left: -35%;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins';
  font-weight: 700;
  letter-spacing: 0px;
  color: hsl(255, 11%, 22%);
  font-size: 22px;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 1200px) {
    text-align: left;
  }
`;

export const CardText = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  color: hsl(257, 7%, 63%);
  text-align: center;
  line-height: 26px;
  font-size: 16px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    text-align: left;
  }
`;
