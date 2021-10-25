function getMaximumSimilarity(similarities,rows,cols){
    let rowsAlreadyTaken = []
    let colsAlreadyTaken = []

    let ar = [],i,j,s=0,sum=0

    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){
            ar[s++] = {
                val:similarities[i][j],
                row:i,
                col:j
            }
        }
    }

    ar.sort((a,b)=> b.val - a.val)

    for(i=0; i<s; i++){
        if(rowsAlreadyTaken.includes(ar[i].row)) continue
        if(colsAlreadyTaken.includes(ar[i].col)) continue
        rowsAlreadyTaken.push(ar[i].row)
        colsAlreadyTaken.push(ar[i].col)

        console.log(`taken value ${ar[i].val} in row ${ar[i].row} and col ${ar[i].col}`)
        sum += ar[i].val
    }

    return sum

}