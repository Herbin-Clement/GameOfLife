import React from 'react';

import './Display.css';

import Node from '../Node/Node';
import { cpuUsage } from 'process';

type DisplayProps = {
    nbWidth: number,
    nbHeight: number
};

const Display = ({nbWidth, nbHeight}: DisplayProps) => {

    const nodes: Array<Array<Node>> = Array(nbHeight).fill(null).map(() => Array(nbWidth).fill(null));
    // console.log(nodes);
    return(
        <div className="grid">
          {nodes.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="row">
                {row.map((node, nodeIdx) => {
                  return (
                    <Node key={nodeIdx} row={rowIdx} column={nodeIdx} color="white" width={100/nbWidth} height={100/nbHeight}/>
                  );
                })}
              </div>
            );
          })}
        </div>  
    );
};

export default Display;