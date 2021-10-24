import React, { useEffect, useState } from 'react';

import './Node.css';

type NodeProps = {
    color: boolean,
    width: number,
    height: number,
    row: number,
    column: number,
    updateNodes: (rowId: number, columnId: number) => void
};

const Node = ({color, row, column, updateNodes}: NodeProps) => {

    const [isSelect, setIsSelect] = useState(color);

    const handleClick = () => {
        // setIsSelect(!isSelect);
        updateNodes(row, column);
    }

    useEffect(() => {
        setIsSelect(color);
    }, [color]);

    return(
        <div onClick={() => handleClick()} className={`node ${isSelect ? "" : "colorNode"}`}>
            
        </div>
    );
};

export default Node;