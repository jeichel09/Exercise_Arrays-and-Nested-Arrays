function solve(arr) {
    let board = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];
    let winnerFound = false;
    let counter = 0;                 
    
    for (let i = 0; i < arr.length; i ++) {
        if (counter === 9) {
            break;
        }
        let currPlace = arr[i].split(" ");
        let row = Number(currPlace[0]);
        let col = Number(currPlace[1]);
        
        if (board[row][col] === false) {
            if (i % 2 === 0) {
                board[row][col] = "X";
                counter ++;
                winner(board, "X");
                if (winnerFound) {
                    break;
                }
            } else {
                board[row][col] = "O";
                counter ++;
                winner(board, "O");
                if (winnerFound) {
                    break;
                }
            }
        } else {
            console.log("This place is already taken. Please choose another!");
            arr.splice(i, 1);
            i --;
        }
    }

    if (!winnerFound) {
        console.log("The game ended! Nobody wins :(");
        for (let j = 0; j < 3; j++) {
            console.log(board[j].join("\t"));
        }
    }

    function winner(mx, char) {
        for (k = 0; k < 3; k ++) {
            if ((mx[k][0] === char && mx[k][1] === char && mx[k][2] === char) 
                || (mx[0][k] === char && mx[1][k] === char && mx[2][k] === char)) {
                console.log(`Player ${char} wins!`);
                winnerFound = true;
                for (let j = 0; j < 3; j++) {
                    console.log(mx[j].join("\t"));
                }
            }
        }
        if ((mx[0][0] === char && mx[1][1] === char && mx[2][2] === char) || (mx[0][2] === char && mx[1][1] === char && mx[2][0] === char)) {
            console.log(`Player ${char} wins!`);
            winnerFound = true;
            for (let j = 0; j < 3; j++) {
                console.log(mx[j].join("\t"));
            }
        }
    }
    
}
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);