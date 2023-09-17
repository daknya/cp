const edgelist = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

// firstly convert this to and adjency matrix

const buildgraph = (edgelist) => {
    const graph = {};

    for (let egde of edgelist) {
        // destruct it 
        const [a, b] = egde;

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);


    }

    return graph


}

const undirected = (edge) => {
    const graph = buildgraph(edge);
    const visited = new Set();
    return hasPath(graph, 'i', 'o', visited);

}


const hasPath = (graph, src, dst, visited) => {
    if (visited.has(src)) return false;
    if (src === dst) return true;

    visited.add(src);
    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst, visited) === true) {
            return true;
        }

    }
    console.log(visited);
    return false;
}
console.log(undirected(edgelist));