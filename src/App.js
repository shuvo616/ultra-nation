import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    // .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ultra Nation</p>
      </header>
    </div>
  );
}

export default App;
