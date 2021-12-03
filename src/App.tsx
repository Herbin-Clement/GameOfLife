import React, { useState, useRef } from 'react';

import './App.css';

import { computeNewArray } from './lib/lib'

import Display from './Component/Display/Display';

const App: React.FC = () => {
  let w: number = 55;
  let h: number = 27;
  
  const [nodes, setNodes] = useState(Array(h).fill(false).map(() => Array(w).fill(false)));
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateCellValue = (rowId: number, columnId: number):void => {
    const tmp = [...nodes];
    tmp[rowId][columnId] = !tmp[rowId][columnId];
    setNodes(tmp);
  }
 
  const autoClick = () => {
    setInterval(() => {
        if (buttonRef.current !== null) {
        buttonRef.current.click();
        }
      }, 250);
  }

  const displayNextGrid = () => {
    let tmp = [...nodes];
    let res = computeNewArray(w, h, tmp);
    setNodes(res);
  }
  
  return (
    <div className="App">
      <Display nbWidth={w} nbHeight={h} grid={nodes} updateCells={updateCellValue}></Display>
      <button onClick={() => displayNextGrid()} ref={buttonRef}></button>
      <button onClick={() => autoClick()}></button>
    </div>
  );
}

export default App;
