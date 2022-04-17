import styled, { css } from 'styled-components';

export const LinkContainer = styled.div`
  width: 100%;
  border-radius: var(--radius);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 30px;
    background-color: white;
  }
`;

export const OldLink = styled.span`
  display: block;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 2px;

  @media (min-width: 600px) {
    background-color: transparent;
    padding: 0;
    width: auto;
    margin-bottom: 0;
  }
`;

export const NewLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 10px 15px;

  @media (min-width: 600px) {
    background-color: transparent;
    flex-direction: row;
    width: auto;
    padding: 0;
  }
`;

export const NewLink = styled.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  color: hsl(180, 66%, 49%);
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    padding: 0;
    width: auto;
    margin-bottom: 0;
  }
`;

interface ICopyButton {
  isCopied: boolean;
}

export const CopyButton = styled.button<ICopyButton>`
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.6px;
  width: 100%;
  transition: all 0.2s ease;

  background-color: ${(props) =>
    props.isCopied ? css`hsl(257, 27%, 26%)` : css`hsl(180, 66%, 49%)`};

  &:hover {
    background-color: ${(props) =>
      props.isCopied ? css`hsl(257, 27%, 26%)` : css`hsl(180, 66%, 69%)`};
  }

  @media (min-width: 600px) {
    width: 100px;
    margin-left: 20px;
    padding: 6px 15px;
  }
`;
