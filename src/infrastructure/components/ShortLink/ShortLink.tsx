import * as S from './ShortLink.styles';
import { useState } from 'react';

interface IShortLink {
  link: string;
  shortLink: string;
}

const ShortLink = ({ link, shortLink }: IShortLink) => {
  const [copy, setCopy] = useState('Copy');
  const copyText = (entryText: string) => () => {
    navigator.clipboard.writeText(entryText);
    setCopy('Copied!');
  };

  return (
    <S.LinkContainer>
      <S.OldLink>{link}</S.OldLink>
      <S.NewLinkContainer>
        <S.NewLink>{shortLink}</S.NewLink>
        <S.CopyButton onClick={copyText(`${shortLink}`)} isCopied={copy === 'Copied!'}>
          {copy}
        </S.CopyButton>
      </S.NewLinkContainer>
    </S.LinkContainer>
  );
};

export default ShortLink;
