function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let i = input[2];
    let j = input[3];

    let result = [];
    for (let k = 0; k < rows; k ++) {
        let currLine = [];
        for (let l = 0; l < cols; l ++) {
            let d1 = Math.abs(i-k);
            let d2 = Math.abs(j-l);
            currLine.push(Math.max(d1, d2) + 1);
        }
        result.push(currLine);
    }

    for (item of result) {
        console.log(item.join(" "));
    }
}
solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);