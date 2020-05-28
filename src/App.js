import React from 'react';
import './App.css'
import ContainerComponent from './Components/containerComponent'
import ContainerComponentFatch from './Components/fatchingData'

function App() {
  return (
    <div className="App">
      <ContainerComponent />
      <ContainerComponentFatch />
    </div>
  );
}

export default App;
