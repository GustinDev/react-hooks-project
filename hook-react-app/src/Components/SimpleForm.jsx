/* eslint-disable no-unused-vars */
import { useForm } from '../hooks/useForm';

const SimpleForm = () => {
  //Importamos el estado y la fun.
  //Le pasamos un objeto inicial (nuestro formulario).
  //También podemos sacar los valores de nuestro form directamente por el ...formState
  const { formState, onInputChange, onInputReset, username, email, password } =
    useForm({
      username: '',
      email: '',
      password: '',
    });

  return (
    <div>
      <h1>Simple Form</h1>
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        onChange={onInputChange}
        value={username}
      />

      <input
        type='email'
        className='form-control'
        placeholder='email'
        name='email'
        onChange={onInputChange}
        value={email}
      />

      <input
        type='password'
        className='form-control'
        placeholder='****'
        name='password'
        onChange={onInputChange}
        value={password}
      />

      <button onClick={onInputReset}>Reset</button>
    </div>
  );
};

export default SimpleForm;
