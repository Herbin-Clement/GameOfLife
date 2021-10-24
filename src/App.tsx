import React, { useState } from 'react';

import './App.css';

import Display from './Component/Display/Display';

const App: React.FC = () => {

  // let w: number = width * 0.70 / 15;
  // let h: number = height * 0.70 / 15;
  let w: number = 10;
  let h: number = 10;
  
  const [nodes, setNodes] = useState(Array(h).fill(false).map(() => Array(w).fill(false)));

  const updateNodeValue = (rowId: number, columnId: number):void => {
    const tmp = [...nodes];
    tmp[rowId][columnId] = !tmp[rowId][columnId];
    setNodes(tmp);
  }
  
  return (
    <div className="App">
      <Display nbWidth={Math.floor(w)} nbHeight={Math.floor(h)} grid={nodes} updateNodes={updateNodeValue}></Display>
    </div>
  );
}

export default App;
