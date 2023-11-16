// 1436. Destination City
// Tested successfully

let paths1 = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];
let paths2 = [["B","C"],["D","B"],["C","A"]];
let paths3 = [["A","Z"]];

function destinationCity(paths)
{
    let dict= {};
    for (path of paths)
    {
        for (let i = 0; i < 2; i++)
        {
            if(dict[path[i]] == null) dict[path[i]] = [i, 1];
            else{
                cnt = dict[path[i]][1];
                dict[path[i]] = [i, cnt+1];
            }
        }
    }
    for (key of Object.keys(dict))
    {
        if(dict[key][0] == 1 && dict[key][1] == 1) return key;
    }
    return "";
}

console.log(destinationCity(paths1));
console.log(destinationCity(paths2));
console.log(destinationCity(paths3));