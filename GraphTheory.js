


const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

function breadthFirstPrint(graph, sourceNode)
{
    let stack = [sourceNode];

    while(stack.length > 0)
    {
        currentNode = stack.pop();
        console.log(currentNode);

        for (let neighbor of graph[currentNode])
        {
            stack.splice(0, 0, neighbor)
        }

    }
}

function depthFirstPrint(graph, source)
{
    console.log(source)
    for(let neighbor of graph[source])
    {
        depthFirstPrint(graph, neighbor);
    }
}

function depthFirstSearch(graph, sourceNode, target)
{

    let stack = [sourceNode];
    while(stack.length > 0)
    {
        let currentNode = stack.pop();
        if(currentNode == target) return true;
        for(let neighbor of graph[currentNode])
        {
            stack.push(neighbor)
        }
    }
    return false;
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges)
    {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const hasPath = (graph, src, dst, visited) => {
    if(src == dst) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src])
    {
        if (hasPath(graph, neighbor, dst, visited)) return true;
    }
    return false;
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    

    return hasPath(graph, nodeA, nodeB, new Set());
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'o'));