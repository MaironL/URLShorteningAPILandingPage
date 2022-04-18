import styled from 'styled-components';
import bgShortenM from 'infrastructure/assets/bg-shorten-mobile.svg';
import bgShortenD from 'infrastructure/assets/bg-shorten-desktop.svg';

export const URLShortening = styled.section`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background-color: #f0f1f6;
`;

export const URLShorteninForm = styled.form`
  position: relative;
  top: -80px;
  display: flex;
  flex-flow: column;
  width: min(100%, 1120px);
  padding: 23px;
  border-radius: 10px;
  background-image: url(${bgShortenM});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 250px;
  background-color: hsl(257, 27%, 26%);
  z-index: 100;

  @media screen and (min-width: 600px) {
    flex-flow: row;
    background-size: 450px;
  }

  @media screen and (min-width: 900px) {
    background-image: url(${bgShortenD});
    background-size: cover;
    padding: 52px 62px;
  }
`;

export const URLShorteningInput = styled.input`
  display: block;
  font-family: 'Poppins';
  font-weight: 500;
  color: hsl(257, 7%, 63%);
  font-size: 18px;
  padding: 12px 18px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  border: none;
  transition: all 0.3s ease-in-out;
  border: 3px solid transparent;

  &::placeholder {
    font-family: 'Poppins';
    font-weight: 500;
    color: hsl(257, 7%, 63%);
    font-size: 18px;
  }

  &[data-focused='true'] {
    border: 3px solid #fb5e60;
  }

  &[data-focused='true'] ~ span {
    display: block;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 0px;
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
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(180, 66%, 69%);
  }

  &[disabled] {
    cursor: not-allowed;
  }

  @media screen and (min-width: 600px) {
    margin-left: 20px;
  }
`;

export const NewShortenURLContainer = styled.div`
  position: relative;
  top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: min(100%, 1120px);
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ErrorMessage = styled.span`
  bottom: -4%;
  position: absolute;
  font-family: 'Poppins';
  font-weight: 500;
  font-style: italic;
  font-size: 16px;
  color: #fb5e60;
  display: none;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 900px) {
    bottom: -50%;
    font-size: 18px;
  }
`;
