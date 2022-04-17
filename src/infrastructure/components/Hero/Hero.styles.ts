import styled from 'styled-components';
import { InnerContainer } from 'globalStyle';

export const Hero = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media screen and (min-width: 900px) {
    margin-top: 65px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 75px;
  }
`;

export const HeroInnerContainer = styled(InnerContainer)`
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: min(100%, 1120px);
  }

  @media screen and (min-width: 900px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 1600px) {
    position: relative;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: 330px;
  object-fit: cover;
  object-position: 0px;
  padding-left: 20px;

  @media screen and (min-width: 900px) {
    position: absolute;
    height: 22rem;
    object-position: 100px;
    right: 0;
  }

  @media screen and (min-width: 1200px) {
    position: absolute;
    height: 500px;
    object-position: 100px;
    right: 0;
  }

  @media screen and (min-width: 1600px) {
    position: absolute;
    height: 500px;
    object-position: 0;
    right: -300px;
  }
`;

export const HeroContent = styled.div`
  width: min(100%, 24rem);
  margin-top: 35px;

  @media screen and (min-width: 1200px) {
    width: 600px;
    margin-top: 75px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;
  line-height: 3.5rem;
  color: hsl(255, 11%, 22%);

  @media screen and (min-width: 900px) {
    text-align: left;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 80px;
    line-height: 90px;
  }
`;

export const HeroDescription = styled.p`
  font-family: 'Poppins';
  padding: 0 15px;
  font-weight: 500;
  color: hsl(257, 7%, 63%);
  text-align: center;
  line-height: 2rem;
  font-size: 18px;

  @media screen and (min-width: 900px) {
    font-size: 1.1rem;
    text-align: left;
    padding: 0;
    line-height: 35px;
  }

  @media screen and (min-width: 1200px) {
    width: min(100%, 550px);
  }
`;

export const HeroButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 30px auto;
  padding: 14px 40px;
  border: none;
  color: white;
  border-radius: 30px;
  letter-spacing: 1px;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 19px;
  background-color: hsl(180, 66%, 49%);
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(180, 66%, 69%);
  }

  @media screen and (min-width: 900px) {
    margin: 25px 0;
  }
`;
