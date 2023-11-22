// Decode XORed Array
// Tested successfully

let encoded1 = [1,2,3], first1= 1;
let encoded2 = [6,2,7,3], first2 = 4


function toBin(num)
{
    if(Math.floor(num/2)==0) return (num%2).toString();

    return  toBin(Math.floor(num/2)) + (num%2).toString();
}

function toDec(bin)
{
    let length = bin.length;
    res = 0;
    for (let i = 0; i < length; i++)
    {
        res += parseInt(bin[i])*Math.pow(2, length-i-1);
    }
    return res;
}

function decodeA2B(a, b)
{

    let binA = toBin(a);
    let binB = toBin(b);

    let aLength = binA.length;
    let bLength = binB.length;
    if(aLength > bLength) binB = "0".repeat(aLength - bLength) + binB;
    else binA = "0".repeat(bLength-aLength) + binA;

    let res = "";
    for (let i = 0; i < binA.length; i++)
    {
        if(binB[i] == "1") res += (1-parseInt(binA[i])).toString(); 
        else res += binA[i];
    }

    return toDec(res);
}

function decodeXORedArray(encoded, first)
{
    let decoded = [first];
    for (let i = 0; i < encoded.length; i++)
    {

        decoded.push(decodeA2B(decoded[i], encoded[i]));
    }
    return decoded;
}

console.log(decodeXORedArray(encoded1, first1));
console.log(decodeXORedArray(encoded2, first2));