import React, { useContext } from 'react';
import BhajanContext from '../context/bhajanContext';

const SuggestBhajan = () => {
  const bhajanContext = useContext(BhajanContext);

  const { bhajanTitle } = bhajanContext;

  return (
    <a href='#' key={bhajanTitle}>
      {bhajanTitle}
    </a>
  );
};

export default SuggestBhajan;
