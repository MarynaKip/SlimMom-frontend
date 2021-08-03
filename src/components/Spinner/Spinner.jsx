import { useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { render } from 'react-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #e0e0e0;
`;

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');
  return (
    <ClipLoader color={color} loading={loading} css={override} size={120} />
  );
};

export default Spinner;
