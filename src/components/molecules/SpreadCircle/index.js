import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { countAndExec } from '../../../helpers/State';

const StyledCircle = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.count * 3 + 32}px;
  height: ${props => props.count * 3 + 32}px;
  border-radius: 50%;
  margin: 2px;

  background: #E91E63;
  color: #fff;

  font-size: 8px;
`;

export default ({ amount = 0, children }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    countAndExec(() => {
      setCount(prev => prev + 1);
    }, amount);
  }, []);
  return (
    <StyledCircle count={count}>
      {children}
    </StyledCircle>
  );
};
