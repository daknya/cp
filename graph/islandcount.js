const grid = [
    ['w', 'l', 'w', 'l', 'w'],
    ['l', 'l', 'w', 'l', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
]

const countisland = (grid) => {
    const visited = new Set();

    let count = 0;



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (explore(grid, i, j, visited) === true) {
                count++;
            };
        }
    }
    console.log(count);

}
const explore = (grid, r, c, visited) => {


    const rowinbound = 0 <= r && r < grid.length;
    const colinbound = 0 <= c && c < grid[0].length;

    if (!rowinbound || !colinbound) return false;

    if (grid[r][c] === 'w') return false;
    const pos = r + ',' + c;
    if (visited.has(pos) == true) return false;
    visited.add(pos);

    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);

    return true;
}

countisland(grid);
