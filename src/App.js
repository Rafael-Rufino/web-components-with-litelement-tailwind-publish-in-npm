
import React from 'react';
import './App.css';
import './litelements/pushbutton-element';
import './components/button-app';
import './components/input-app';
import './components/heading-app';
import './components/alert.js';
function App() {

  return (
    <div className="App">
      <div className="Content">
        <heading-app title="Acessando sua conta" description="Informe seu login e senha para continuar" />
        {/* <br/>
        <input-app/>
        <input-app/>
        <br />
        <button-app/>  */}
      </div>
    </div>
  );
}

export default App;
