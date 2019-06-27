import React, { useEffect, useState } from 'react';
import { countAndExec } from '../../../helpers/State';

export default ({ amount = 0, children }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    countAndExec(() => {
      setCount(prev => prev + 1);
    }, amount);
  }, []);
  return (
    <>{count}</>
  );
};
