import { useState, useCallback } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Usamos useCallback para memorizar la función de incremento, asi no ocupamos más memoria.
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
};

export default ExampleComponent;
