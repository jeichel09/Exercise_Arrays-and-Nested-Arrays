function solve(arr, count) {
    for (let i = 1; i <= count; i ++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(" "));
}
solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);