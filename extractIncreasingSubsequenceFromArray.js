function solve(arr) {
    return arr.reduce((item, next, i) => {
        if (next > item[item.length - 1] && i > 0) {
            item.push(next);
        }
        return item;
    }, [arr[0]]);
    return result;
    
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));