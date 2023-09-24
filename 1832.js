// 1832: Check if the sentence is Pangram
// Use set to check for Anagram
// Tested successfully


let sentence1 = "thequickbrownfoxjumpsoverthelazydog"
let sentence2 = "leetcode"

let total_score = 0
for (let i = 97; i < 123; i++)
{
    total_score += i;
    
}

function checkPanagram(sentence)
{   
    let set = [sentence[0]];
    for (s of sentence.slice(1, ))
    {
        if(!set.includes(s)){
            set.push(s)
        }
    }

    if(set.length == 26)
    {
        return true;
    }

    return false;

}


console.log(checkPanagram(sentence1));
console.log(checkPanagram(sentence2));