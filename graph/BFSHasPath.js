const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const BFSHasPath = (graph, src, dst) => {
    const queue = [src];

    while (queue.length != 0) {

        const current = queue.shift();
        if (current === dst) {
            return true;
        }
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }

    }
    return false;

}


console.log(BFSHasPath(graph, 'a', 'd'));