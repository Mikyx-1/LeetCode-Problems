// 804. Unique Morse Code Words

let words1 = ["gin", "zen", "gig", "msg"];
let words2 = ["a"];

let library = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

function uniqueMorseCodeWords(words)
{   
    let results = [];
    for (word of words)
    {   let result = [];
        for (letter of word)
        {
            idx = letter.charCodeAt(0) - 97;
            result.push(library[idx]);
        }
        results.push(result.join(""));
    }

    
    const set = new Set(results)
    return set.size;
}


console.log(uniqueMorseCodeWords(words1));
console.log(uniqueMorseCodeWords(words2));