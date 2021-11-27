import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  import('wasm').then(module => {
    console.log(module)
 })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
