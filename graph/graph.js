
// const DFS = (graph, source) => {
//     const stack = [source];


//     while (stack.length > 0) {

//         const current = stack.pop();
//         console.log(current);

//         for (let neighbour of graph[current]) {
//             stack.push(neighbour);
//         }


//     }
// }

const DFS = (graph, source) => {


    console.log(source);

    for (let neighbour of graph[source]) {
        DFS(graph, neighbour);
    }



}
const BFS = (graph, source) => {
    const queue = [source];


    while (queue.length > 0) {

        const current = queue.shift();
        console.log(current);

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }


    }
}
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: ['b'],
    f: [],
}
DFS(graph, 'a');
console.log(" __________________________")
BFS(graph, 'a');