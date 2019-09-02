import React from 'react';
import './App.css';
import SoapNameGenerator from './SoapNameGenerator';
import {firstWords, secondWords} from './soapWords';

function App() {
  return (
    <SoapNameGenerator firstWords={firstWords} secondWords={secondWords}></SoapNameGenerator>
  );
}

export default App;
