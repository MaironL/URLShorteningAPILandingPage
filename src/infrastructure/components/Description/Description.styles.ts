import { InnerContainer } from 'globalStyle';
import styled from 'styled-components';

export const Description = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #f0f1f6;
  z-index: 50;
`;

export const DescriptionInnerContainer = styled(InnerContainer)`
  display: flex;
  flex-direction: column;
`;

export const DescriptionPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DescriptionTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  letter-spacing: -1px;
  color: hsl(255, 11%, 22%);
  text-align: center;
`;

export const DescriptionText = styled.p`
  font-family: 'Poppins';
  padding: 0 15px;
  font-weight: 500;
  color: hsl(257, 7%, 63%);
  text-align: center;
  line-height: 26px;
  font-size: 16px;
  width: min(100%, 500px);
`;

export const DescriptionCardsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 180px;
  }
`;

export const CyanLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-left: 6px solid hsl(180, 66%, 49%);
  height: 80%;
  z-index: -1;

  @media screen and (min-width: 1200px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-left: none;
    border-top: 8px solid hsl(180, 66%, 49%);
    height: 0%;
    width: 100%;
  }
`;
