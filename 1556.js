// 1556. Thousand Separator
// Tested successfully

// O(1)

let n1 = 987, n2 = 1234;

function thousandSeparator(n)
{
    let length = Math.floor(Math.log10(n)) + 1;
    let string = n.toString();  
    if(length < 4) return string;

    return string.slice(0, length-3) +  "."  + string.slice(length-3, );
}

console.log(thousandSeparator(n1));
console.log(thousandSeparator(n2));