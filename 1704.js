// 1704. Determine If string havles are alike
// Tested successfully

let s1 = "book", s2 = "textbook";

function stringHalvesAreAlike(string)
{
    let length = string.length;
    let firstHalf = string.slice(0, length/2);
    let secondHalf = string.slice(length/2, );
    let vowels = {"u":1, "e":1, "o":1, "a":1, "i":1, "U":1, 
                  "E":1, "O":1, "A":1, "I":1};

    let dict = {};
    for (let i = 0; i < length/2; i++)
    {
        if(vowels[firstHalf[i]] != null)
        {
            if(dict[firstHalf[i]] == null) dict[firstHalf[i]] = [1, 0];
            else dict[firstHalf[i]][0]++;
        }

        if(vowels[secondHalf[i]] != null)
        {
            if(dict[secondHalf[i]] == null) dict[secondHalf[i]] = [0, 1];
            else dict[secondHalf[i]][1]++;
        }
    }
    for (value of Object.values(dict))
    {
        if(value[0] != value[1]) return false;
    }
    return true;
}

console.log(stringHalvesAreAlike(s1));
console.log(stringHalvesAreAlike(s2));