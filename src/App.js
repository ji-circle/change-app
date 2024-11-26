import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [inches, setInches] = useState('');
  const [pounds, setPounds] = useState('');
  const [ounces, setOunces] = useState('');
  const convertInchesToCm = (inches) => (inches ? (inches * 2.54).toFixed(2) : '');
  const convertPoundsToKg = (pounds) => (pounds ? (pounds * 0.453592).toFixed(2) : '');
  const convertOuncesToMl = (ounces) => (ounces ? (ounces * 29.5735).toFixed(2) : '');
  return (
    <div className="App">
      <h1 className="name">
        최지원
      </h1>
      <h1>Unit Converter</h1>
      <div className="converter">
        <label>
          Inches:
          <input
            type="number"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
        </label>
        <p>{inches && `${inches} inches = ${convertInchesToCm(inches)} cm`}</p>
      </div>
      <div className="converter">
        <label>
          Pounds:
          <input
            type="number"
            value={pounds}
            onChange={(e) => setPounds(e.target.value)}
          />
        </label>
        <p>{pounds && `${pounds} pounds = ${convertPoundsToKg(pounds)} kg`}</p>
      </div>
      <div className="converter">
        <label>
          Ounces:
          <input
            type="number"
            value={ounces}
            onChange={(e) => setOunces(e.target.value)}
          />
        </label>
        <p>{ounces && `${ounces} ounces = ${convertOuncesToMl(ounces)} ml`}</p>
      </div>
    </div>
  );
};
export default App;
