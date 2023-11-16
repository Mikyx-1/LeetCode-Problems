// 1816. Truncate Sentence
// Tested successfully

let s1 = "Hello how are you Contestant", k1 = 4;
let s2 = "What is the solution to this problem", k2 = 4;
let s3 = "chopper is not a tanuki", k3 = 5;

function truncateSentence(string, k)
{
    return string.split(" ").slice(0, k).join(" ");
}

console.log(truncateSentence(s1, k1));
console.log(truncateSentence(s2, k2));
console.log(truncateSentence(s3, k3));