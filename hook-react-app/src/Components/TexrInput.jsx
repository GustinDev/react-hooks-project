import { useRef } from 'react';

function TextInput() {
  //Lo iniciamos.
  const inputRef = useRef(null);

  //Al darle al botón, se le hace focus al input.
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Seleccionamos al input como referencia. */}
      <input ref={inputRef} type='text' />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default TextInput;
