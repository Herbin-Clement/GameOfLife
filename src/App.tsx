import React from 'react';

import './App.css';

import Display from './Component/Display/Display';

const App: React.FC = () => {

  const width: number = 10;
  const height: number = 10;

  return (
    <div>
      <Display width={width} height={height}></Display>
    </div>
  );
}

export default App;
