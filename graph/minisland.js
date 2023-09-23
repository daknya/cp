const grid = [
    ['w', 'l', 'w', 'l', 'w'],
    ['l', 'l', 'w', 'l', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
]

const countisland = (grid) => {
    const visited = new Set();

    let min = 1000;



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const size = explore(grid, i, j, visited)


            if (size > 0 && size < min) {
                console.log(size);
                min = size;
            };
        }
    }
    console.log(min);

}
const explore = (grid, r, c, visited) => {


    const rowinbound = 0 <= r && r < grid.length;
    const colinbound = 0 <= c && c < grid[0].length;

    if (!rowinbound || !colinbound) return 0;

    if (grid[r][c] === 'w') return 0;
    const pos = r + ',' + c;
    if (visited.has(pos) == true) return 0;
    visited.add(pos);


    let size = 1;
    size += explore(grid, r + 1, c, visited);
    size += explore(grid, r - 1, c, visited);
    size += explore(grid, r, c + 1, visited);
    size += explore(grid, r, c - 1, visited);

    return size;
}

countisland(grid);
