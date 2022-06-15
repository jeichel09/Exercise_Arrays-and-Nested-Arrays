function solve(mx) {
    let isMagical = true;
    for (let i = 0; i < mx.length - 1; i ++) {
        let sumCurrRow = mx[i].reduce((a, b) => a + b, 0);
        let sumNextRow = mx[i + 1].reduce((a, b) => a + b, 0);
        
        let sumCurrCol = 0;
        let sumNextCol = 0;
        for (let j = 0; j < mx.length; j ++) {
            sumCurrCol += mx[i][j];
            sumNextCol += mx[i + 1][j];
        }

        if (sumCurrRow !== sumNextRow || sumCurrCol !== sumNextCol) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);