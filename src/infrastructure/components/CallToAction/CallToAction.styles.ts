import styled from 'styled-components';
import BgBoostM from 'infrastructure/assets/bg-boost-mobile.svg';
import BgBoostD from 'infrastructure/assets/bg-boost-desktop.svg';

export const CallToAction = styled.section`
  position: relative;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${BgBoostM});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    background-image: url(${BgBoostD});
  }
`;

export const CallToActionTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  letter-spacing: -1px;
  color: white;
  text-align: center;
`;

export const CallToActionButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 14px 40px;
  border: none;
  color: white;
  border-radius: 30px;
  letter-spacing: 1px;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 19px;
  background-color: hsl(180, 66%, 49%);
`;
