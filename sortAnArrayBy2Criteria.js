function solve(arr) {
    arr.sort(twoCriteriaSort);
    return arr.join("\n");

    function twoCriteriaSort(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
    
}
console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(solve(['test', 'deny', 'Omen', 'Default']));