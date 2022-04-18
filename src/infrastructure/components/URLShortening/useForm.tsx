import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useForm = () => {
  interface ILinksList {
    link: string;
    shortLink: string;
  }
  const getlocalStorage = () => {
    const localState = localStorage.getItem('linksList');
    return localState !== null && JSON.parse(localState);
  };

  const [linksList, setLinksList] = useState<ILinksList[]>(getlocalStorage() || []);
  const [values, setValues] = useState({ link: '' });
  const [errors, setErrors] = useState({ link: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URI}shorten?url=${values.link}`
      );
      const { original_link, short_link } = response.data.result;
      await setLinksList((prevState) => [
        ...prevState,
        { link: original_link, shortLink: short_link },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [disableSubmit, setDisableSubmit] = useState(false);

  useEffect(() => {
    localStorage.setItem('linksList', JSON.stringify(linksList));
  }, [linksList]);

  useEffect(() => {
    setErrors(values.link === '' ? { link: 'Please add a link' } : { link: '' });
  }, [values]);

  useEffect(() => {
    setDisableSubmit(Object.values(errors).some((error) => error !== ''));
  }, [errors]);

  return { values, handleSubmit, handleChange, disableSubmit, errors, linksList };
};

export default useForm;
