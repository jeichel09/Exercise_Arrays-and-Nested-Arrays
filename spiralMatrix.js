function solve(rows, cols) {
    let result = [];
    let addArr = 0;
    while (addArr < rows) {
        result.push([]);
        addArr ++;
    }
    let value = 0;
    let countdown = cols - 1;
    right(0, 0, countdown);
    
    let col = countdown;
    let row = 1;
    let offset = 0;

    while (countdown > 0) {
        down(row, col, countdown);
        col --;
        row = col + 1;
        left(row, col, countdown);
        countdown --;
        if (countdown < 1) {
            break;
        }
        row --;
        col -= countdown;
        up(row, col, countdown);
        //offset = 0;
        row -= (countdown - 1);
        col ++;
        right(row, col, countdown);
        countdown --;
        row ++;
        col += countdown;
    }

    function right(i, j, n) {
        for (let k = j; k <= n; k ++) {
            result[i][k] = value + 1;
            value ++;
        }
        return value;
    }

    function down(i, j, n) {
        for (let k = i; k <= n + offset; k ++) {
            result[k][j] = value + 1;
            value ++;
            offset ++;
        }
        return value;
    }

    function left(i, j, n) {
        for (let k = j; k > j - n; k --) {
            result[i][k] = value + 1;
            value ++;
        }
        return value;
    }

    function up(i, j, n) {
        for(let k = i; k > i - n; k -- ) {
            result[k][j] = value + 1;
            value ++;
        }
        return value;
    }

    console.log(result);
}
//solve(5, 5);
solve(3, 3);