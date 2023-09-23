const graph = {
    1: ['2'],
    2: ['1'],
    3: [],
    4: ['6'],
    5: ['6'],
    6: ['4', '5', '7', '8'],
    7: ['6'],
    8: ['6']
}

const connectedcount = (graph) => {
    const visited = new Set();

    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count++;
        }
    }
    return count;

}

const explore = (graph, node, visited) => {
    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbour of graph[node]) {
        explore(graph, neighbour, visited);
    }
    return true;
}

console.log(connectedcount(graph));
