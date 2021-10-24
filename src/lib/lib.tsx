const getNeighborsValues = (columnId: number, rowId: number, width: number, height: number, grid: Array<Array<boolean>>): Array<boolean> => {
    const res: Array<boolean> = [];
    // console.log(`- x : ${columnId}, y : ${rowId} = ${grid[rowId][columnId]}`)
    for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
            if (rowId + y >= 0 && rowId + y < height && columnId + x >= 0 && columnId + x < width) {
                if (!(x === 0 && y === 0)) {
                    // console.log(`x : ${columnId + x}, y : ${rowId + y} = ${grid[rowId + y][columnId + x]}`)
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
            // console.log(`- x : ${cellIdx}, y : ${rowIdx}, occ =  ${occ}}`)
            if (currentArray[rowIdx][cellIdx] && (occ === 2 || occ === 3)) {
                // console.log(`1 - x : ${cellIdx}, y : ${rowIdx}, occ =  ${occ}}`)
                return true;
            } else if (!currentArray[rowIdx][cellIdx] && occ == 3) {
                // console.log(`2 - x : ${cellIdx}, y : ${rowIdx}, occ =  ${occ}}`)
                return true;
            } else {
                // console.log(`3 - x : ${cellIdx}, y : ${rowIdx}, occ =  ${occ}}`)
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