function solve(arr) {
    let mx = [];
    for (row of arr) {
        let newRow = row.split(" ");
        let numRow = newRow.map(str => {
            return Number(str);
          });
        mx.push(numRow);
    }

    let d1 = 0;
    let d2 = 0;
    for (let j = 0; j < mx.length; j ++) {
        d1 += mx[j][j];
        d2 += mx[j][mx.length - 1 - j];
    }

    if (d1 === d2) {
        for (let k = 0; k < mx.length; k ++) {
            for (let l = 0; l < mx.length; l ++) {
                if ((l !== k) && (l !== mx.length - 1 - k)) {
                    mx[k][l] = d1;
                }
            }
        }
        for (item of mx) {
            console.log(item.join(" "));
        }
    } else {
        for (line of mx) {
            console.log(line.join(" "));
        }
    }
    
}
solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
solve(['1 1 1',
'1 1 1',
'1 1 0']);