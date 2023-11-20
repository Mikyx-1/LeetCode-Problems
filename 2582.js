// 2582. Pass the Pillow
// Tested successfully

let n1 = 4, time1 = 5;
let n2 = 3, time2 = 2;

function passThePillow(n, time)
{
    return (time%n) + 1;
}

console.log(passThePillow(n1, time1));
console.log(passThePillow(n2, time2));