// 500. Keyboard Row
// Tested successfully

let words1 = ["Hello", "Alaska", "Dad", "Peace"];
let words2 = ["omk"];
let words3 = ["adsdf", "sfd"];

function createDict()
{
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";
    let dict = {};
    for(r1 of row1) dict[r1] = 1;
    for (r2 of row2) dict[r2] = 2;
    for (r3 of row3) dict[r3] = 3;
    return dict;
}

function keyboardRow(words)
{
    let dict = createDict();
    let result = [];
    for (word of words)
    {   
        // word = word.toLowerCase();
        let rowIdx = dict[word[0].toLowerCase()]; 
        let breakFlag = false;
        for (let i = 1; i < word.length; i++)
        {
            if (dict[word[i].toLowerCase()] != rowIdx) 
            {
                breakFlag = true;
                break;
            }
        }
        if(breakFlag==false) result.push(word); 
    }

    return result;
}

console.log(keyboardRow(words1));
console.log(keyboardRow(words2));
console.log(keyboardRow(words3));