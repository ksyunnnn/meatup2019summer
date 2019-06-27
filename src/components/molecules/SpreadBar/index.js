import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { countAndExec } from '../../../helpers/State';

const StyledBar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.count * 4 + 30}px;
  height: 36px;
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
    <StyledBar count={count}>
      {children}
    </StyledBar>
  );
};
