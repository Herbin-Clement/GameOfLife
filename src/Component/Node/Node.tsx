import React from 'react';

import './Node.css';

type NodeProps = {
    color: string,
    width: number,
    height: number,
    row: number,
    column: number,
};

const Node = ({color, row, column}: NodeProps) => {

    const colorStyle: string = color ? "" : "colorNode";

    return(
        <div onClick={() => console.log(row, column)} className={`node ${colorStyle}`}>
            
        </div>
    );
};

export default Node;