const getNeighborsValues = (columnId: number, rowId: number, width: number, height: number, grid: Array<Array<boolean>>): Array<boolean> => {
    const res: Array<boolean> = [];
    for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
            if (rowId + y >= 0 && rowId + y < height && columnId + x >= 0 && columnId + x < width) {
                if (!(x === 0 && y === 0)) {
                    res.push(grid[rowId + y][columnId + x]);
                }
            }
        }
        
    }
    return res;
}

const computeNewArray = (width: number, height: number, currentArray: Array<Array<boolean>>): Array<Array<boolean>> => {
    let res: Array<Array<boolean>> = Array(height).fill(false).map(() => Array(width).fill(false));
    ;

    res = res.map((row, rowIdx) => {
        row = row.map((cell, cellIdx) => {
            const occ = occValue(true, getNeighborsValues(cellIdx, rowIdx, width, height, currentArray))
            if (currentArray[rowIdx][cellIdx] && (occ === 2 || occ === 3)) {
                return true;
            } else if (!currentArray[rowIdx][cellIdx] && occ === 3) {
                return true;
            } else {
                return false;
            }
        })
        return row;
    })
    return res;
}


const occValue = (value: boolean, array: Array<boolean>): number => {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) res += 1;
    }

    return res;
}


export { computeNewArray }