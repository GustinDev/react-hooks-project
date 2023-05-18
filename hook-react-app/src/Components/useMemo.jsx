/* eslint-disable no-unused-vars */
import { useState } from 'react';

const useMemo = () => {
  const [counter, setCounter] = useState(0);
  let heavyProcess = () => {
    console.log('a');
  };

  const memorizedValue = useMemo(() => heavyProcess(counter), [counter]);

  memorizedValue();
  return <div></div>;
};

export default useMemo;
