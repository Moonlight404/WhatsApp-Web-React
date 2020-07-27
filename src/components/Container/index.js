import React from 'react';
import LeftBar from '../leftBar';
import './style.css';
import Chating from '../Chating/index';

function App() {
  return (
    <div>
      <div className="container">
        <LeftBar></LeftBar>
        <Chating></Chating>
      </div>
    </div>
  );
}

export default App;
