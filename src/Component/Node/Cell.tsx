import React, { useEffect, useState } from 'react';

import './Cell.css';

type CellProps = {
    color: boolean,
    width: number,
    height: number,
    row: number,
    column: number,
    updateCells: (rowId: number, columnId: number) => void
};

const Cell = ({color, row, column, updateCells}: CellProps) => {

    const [isSelect, setIsSelect] = useState(color);

    const handleClick = () => {
        // setIsSelect(!isSelect);
        updateCells(row, column);
    }

    useEffect(() => {
        setIsSelect(color);
    }, [color]);

    return(
        <div onClick={() => handleClick()} className={`cell ${isSelect ? "" : "colorCell"}`}>
            
        </div>
    );
};

export default Cell;