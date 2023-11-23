// 2103. Rings and Rods
// Tested successfully

let rings1 = "B0B6G0R6R0R6G9";
let rings2 = "B0R0G0R9R0B0G0";
let rings3 = "G4";

function decode(char)
{
    if(char=="B") return 0;
    if (char == "G") return 1;
    return 2;

}

function ringsAndRods(rings)
{
    let dict = {};
    for(let i = 0; i < rings.length-1; i+=2)
    {
        if(dict[rings[i+1]] == null) {
            dict[rings[i+1]] = [0, 0, 0];
            dict[rings[i+1]][decode(rings[i])] = 1;
        }
        else{
            dict[rings[i+1]][decode(rings[i])] = 1;
            if(dict[rings[i+1]].reduce((a, b) => {return a + b}) == 3) return parseInt(rings[i+1]) + 1;
        } 
    }
    return 0;
}

console.log(ringsAndRods(rings1));
console.log(ringsAndRods(rings2));
console.log(ringsAndRods(rings3));
