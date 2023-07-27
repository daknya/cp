const checksho = (arr) => {

    for (i = 0; i < arr.length; i++) {
        let map = new Map;

        for (j = 0; j < arr.length; j++) {

            if (map.has(arr[i][j])) {
                return false;
            }
            else {
                map.set(j, arr[i][j]);
            }
        }
        map.clear();


    }

    for (i = 0; i < arr.length; i++) {
        let map = new Map();
        for (j = 0; j < arr.length; j++) {
            if (map.has(arr[j][i])) {
                return false;
            }
            else {
                map.set(j, arr[j][i]);
            }
        }
        map.clear();

    }
    // 8 3 .
    // 6 . .
    // . 9 8
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {

            let map = new Map();

            for (let c = i; c < 3; c++) {
                for (let t = j; t < 3; t++) {
                    if (map.has(arr[c][t])) {
                        return false;
                    }
                    else if (arr[c][t] == ".") {
                        continue;
                    }
                    else {
                        map.set(arr[c][t], (c + t));
                    }
                }
            }
            map.clear();

        }
    }


    return true;
}


console.log(checksho([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
/* [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
]

first itaration 
*/