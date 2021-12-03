import React from 'react';

import './Display.css';

import Cell from '../Node/Cell';

type DisplayProps = {
    nbWidth: number,
    nbHeight: number,
    grid: Array<Array<boolean>>,
    updateCells: (rowId: number, column: number) => void
};

const Display = ({nbWidth, nbHeight, grid, updateCells}: DisplayProps) => {

    // console.log(nodes);
    return(
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="row">
                {row.map((cell, nodeIdx) => {
                  return (
                    <Cell 
                      key={nodeIdx} 
                      row={rowIdx} 
                      column={nodeIdx} 
                      color={cell} 
                      width={100/nbWidth} 
                      height={100/nbHeight}
                      updateCells={updateCells}
                      />
                  );
                })}
              </div>
            );
          })}
        </div>  
    );
};

export default Display;