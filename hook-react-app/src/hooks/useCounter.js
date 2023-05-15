import { useState } from 'react';

const useCounter = (initialValue) => {
  //La variable, usamos la que nos pasan en parámetro.
  const [counter, setCounter] = useState(initialValue);

  //Las funciones modificadoras.
  let increment = () => {
    setCounter(counter + 1);
  };

  let decremet = () => {
    setCounter(counter - 1);
  };

  let restart = () => {
    setCounter(initialValue);
  };
  //Retornamos - exportamos todo en un objeto.
  return { counter, increment, decremet, restart };
};

export default useCounter;
