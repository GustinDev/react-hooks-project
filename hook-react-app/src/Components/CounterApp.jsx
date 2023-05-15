import useCounter from '../hooks/useCounter';

export const CounterApp = () => {
  //La invocamos, desestructuramos  y damos un valor inicial.
  const { counter, increment, decremet, restart } = useCounter(0);

  //Llamamos a las funciones y estados normalmente.
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decremet}>-1</button>
      <button onClick={restart}> Restart </button>
    </div>
  );
};
