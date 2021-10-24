import React, { useEffect } from 'react';

import './Display.css';

import Node from '../Node/Node';

type DisplayProps = {
    nbWidth: number,
    nbHeight: number,
    grid: Array<Array<boolean>>,
    updateNodes: (rowId: number, column: number) => void
};

const Display = ({nbWidth, nbHeight, grid, updateNodes}: DisplayProps) => {

    // console.log(nodes);
    return(
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="row">
                {row.map((node, nodeIdx) => {
                  return (
                    <Node 
                      key={nodeIdx} 
                      row={rowIdx} 
                      column={nodeIdx} 
                      color={node} 
                      width={100/nbWidth} 
                      height={100/nbHeight}
                      updateNodes={updateNodes}
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