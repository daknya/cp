const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: ['b'],
    f: [],
}

const hasPath = (graph, src, dst) => {

    //base case 

    if (src === dst) {
        return true;
    }

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst)) {
            return true;
        }
    }
    return false;
}



console.log(hasPath(graph, 'a', 'g'));