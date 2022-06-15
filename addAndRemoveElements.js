function solve(arr) {
    let result = [];
    let initial = 1;
    for (comm of arr) {
        if (comm === "add") {
            result.push(initial);
            initial ++;
        } else if  (comm === "remove") {
            result.pop();
            initial ++;
        }
    }
    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log("Empty");
    }
}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);