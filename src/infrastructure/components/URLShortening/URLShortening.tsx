import * as S from './URLShortening.styles';
import ShortLink from 'infrastructure/components/ShortLink/ShortLink';
import useForm from './useForm';
import { useState } from 'react';

const URLshortening = () => {
  const { values, handleSubmit, handleChange, disableSubmit, errors, linksList } =
    useForm();
  const [focused, setFocused] = useState(false);

  return (
    <S.URLShortening>
      <S.SemanticHeading>URL Shortenin Form</S.SemanticHeading>
      <S.URLShorteninForm onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.URLShorteningInput
            name='link'
            type='text'
            value={values.link}
            onChange={handleChange}
            onBlur={() => setFocused(true)}
            data-focused={errors.link && focused}
            placeholder='Shorten a link here...'
            required
          />
          <S.ErrorMessage>{errors.link}</S.ErrorMessage>
        </S.InputContainer>
        <S.URLShorteningButton disabled={disableSubmit}>
          Shorten It!
        </S.URLShorteningButton>
      </S.URLShorteninForm>
      <S.NewShortenURLContainer>
        {linksList.map((item, i) => {
          return <ShortLink key={i} link={item.link} shortLink={item.shortLink} />;
        })}
      </S.NewShortenURLContainer>
    </S.URLShortening>
  );
};

export default URLshortening;
