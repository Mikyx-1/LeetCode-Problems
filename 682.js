// 682. Baseball game
// Tested successfully

let ops1 = ["5","2","C","D","+"];
let ops2 = ["5","-2","4","C","D","9","+","+"];
let ops3 = ["1","C"];

function baseballGame(ops)
{
    let arr = [];
    let length = -1;
    for (op of ops)
    {
        if(op==="+") {
            arr.push(arr[length] + arr[length-1]);
            length++;
        }

        else if (op === "D")
        {
            arr.push(arr[length]*2);
            length++;
        }
        else if (op === "C")
        {
            arr.splice(length, 1);
            length--;
        }
        else 
        {
            arr.push(parseInt(op));
            length++;
        }
    }
    let sum = 0;
    for (a of arr) sum += a;
    return sum;
}

console.log(baseballGame(ops1));
console.log(baseballGame(ops2));
console.log(baseballGame(ops3));