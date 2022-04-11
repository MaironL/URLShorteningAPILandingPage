import * as S from './URLShortening.styles';

const URLshortening = () => {
  return (
    <S.URLShortening>
      <S.URLShorteninForm>
        <S.URLShorteningInput placeholder='Shorten a link here...' />
        <S.URLShorteningButton>Shorten It!</S.URLShorteningButton>
      </S.URLShorteninForm>
    </S.URLShortening>
  );
};

export default URLshortening;
