import styled from 'styled-components';
import { InnerContainer } from 'globalStyle';

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232027;
  min-height: 310px;
  border: none;
`;

export const FooterInner = styled(InnerContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 55px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 72px;
  }
`;

export const FooterLogo = styled.img`
  filter: brightness(30%) contrast(100%) invert(100%);
  max-width: 100%;
  height: 34px;
  object-fit: contain;
  margin-bottom: 55px;

  @media screen and (min-width: 900px) {
    margin-bottom: 0px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: start;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 900px) {
    align-items: start;
    margin-left: 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 80px;
  }
`;

export const FooterColTitle = styled.span`
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: 0px;
  color: white;
  text-align: center;
  font-size: 16px;
  margin-bottom: 22px;
`;

export const FooterColText = styled.a`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  color: hsl(257, 7%, 63%);
  font-size: 16px;
  margin-bottom: 9px;
  transition: all 0.15s ease;

  &:hover {
    color: hsl(180, 66%, 49%);
  }
`;

export const FooterColLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 32px;

  @media screen and (min-width: 900px) {
    margin: 0 0 0 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 80px;
  }
`;

export const SocialIcon = styled.img`
  max-width: 100%;
  height: 23px;
  object-fit: contain;
  transition: all 0.2s ease;

  &:hover {
    filter: invert(68%) sepia(90%) saturate(375%) hue-rotate(125deg) brightness(130%)
      contrast(93%);
  }
`;
export const SocialLinks = styled.a`
  margin: 0 12px;

  @media screen and (min-width: 900px) {
    margin: 0 0 0 24px;
  }
`;

export const attribution = styled.div`
  margin-top: auto;
  font-size: 11px;
  text-align: center;
  margin-bottom: 15px;
  color: hsl(257, 7%, 63%);

  & a {
    color: hsl(180, 66%, 49%);
    margin-left: 2px;
  }
`;
