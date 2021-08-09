import logo from './logo.svg';
import './App.css';
import React from 'react';
import LeftColumn from './Components/LeftColumn/LeftColumn';
import RightColumn from './Components/RightColumn/RightColumn';
import './Components/css/grid.css';

function App() {
  return (
    <>
      <div className="grid">
        <div className="row">
          <div className="col l-4 m-12 c-12">
            <LeftColumn/>
          </div>
          <div className="col l-8 m-12 c-12">
            <RightColumn/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
