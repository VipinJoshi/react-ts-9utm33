import * as React from 'react';
import LanguageContext from './LanguageContext';

import CovidList from './components/CovidList';
//import useViewPortWidth from './hooks/useViewportWidth';
import './style.css';

const Nav = ({ onLanguageChange }) => {
  return (
    <nav>
      Choose language:
      <button onClick={onLanguageChange} id="English">
        English
      </button>
      <button onClick={onLanguageChange} id="Spanish">
        Spanish
      </button>
      <button onClick={onLanguageChange} id="French">
        French
      </button>
    </nav>
  );
};

export default function App() {
  //const { viewportWidth } = useViewPortWidth();
  const handleLanguageChange = (event) => {
    event.preventDefault();
    const { id } = event.target;
    setSelectedLanguage(id);
  };
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');

  return (
    <div>
      <Nav onLanguageChange={handleLanguageChange} />
      <LanguageContext.Provider
        value={{ selectedLanguage: selectedLanguage, name: 'Vipin' }}
      >
        <h1>Hello StackBlitz!</h1>

        <p>Start editing to see some magic happen :)</p>
        {/*  <h3>{`view port width is ${viewportWidth}`}</h3> */}
        <CovidList />
      </LanguageContext.Provider>
    </div>
  );
}
