import styled from 'styled-components';
import bgShortenM from 'infrastructure/assets/bg-shorten-mobile.svg';
import bgShortenD from 'infrastructure/assets/bg-shorten-desktop.svg';

export const URLShortening = styled.section`
  position: relative;
  bottom: -80px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 55px;
`;

export const URLShorteninForm = styled.form`
  display: flex;
  flex-flow: column;
  width: min(100%, 1120px);
  padding: 23px;
  border-radius: 10px;
  background-image: url(${bgShortenM});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  background-color: hsl(257, 27%, 26%);
  z-index: 100;

  @media screen and (min-width: 600px) {
    flex-flow: row;
  }

  @media screen and (min-width: 900px) {
    background-image: url(${bgShortenD});
    padding: 52px 62px;
  }
`;

export const URLShorteningInput = styled.input`
  display: block;
  padding: 18px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  border: none;

  &::placeholder {
    font-family: 'Poppins';
    font-weight: 500;
    color: hsl(257, 7%, 63%);
    font-size: 1.125rem;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 900px) {
    padding: 24px;
  }
`;

export const URLShorteningButton = styled.button`
  display: block;
  min-width: 190px;
  padding: 12px 35px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 18px;
  background-color: hsl(180, 66%, 49%);

  @media screen and (min-width: 600px) {
    margin-left: 20px;
  }
`;
