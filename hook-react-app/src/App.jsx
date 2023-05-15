import reactLogo from './assets/react.svg';
import './App.css';
import { HooksApp } from './HooksApp';

function App() {
  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <HooksApp />
    </>
  );
}

export default App;
