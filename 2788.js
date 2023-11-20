// 2788. Split Strings by Separator
// Tested successfully

// Need improvement

let words1 = ["one.two.three","four.five","six"], separator1 = ".";
let words2 = ["$easy$","$problem$"], separator2 = "$";
let words3 = ["|||"], separator3 = "|";


function splitStringsBySeparator(words, separator)
{
    let ans = [];
    for (word of words)
    {
        items = word.split(separator);
        for(item of items)
        {
            if (item != "") ans.push(item);
        }
    }
    return ans;
}

console.log(splitStringsBySeparator(words1, separator1));
console.log(splitStringsBySeparator(words2, separator2));
console.log(splitStringsBySeparator(words3, separator3));