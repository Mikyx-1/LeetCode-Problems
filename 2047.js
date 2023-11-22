// 2047. Number of Valid Words in a sentence
// Tested successfully

let sentence1 = "cat   and    dog", sentence2 = "!this  1-s b8d!", sentence3 = "alice and  bob are playing stone-game10";

function checkValid(word)
{
    /*
        No digits
        At most 1 hyphen and must be surrounded by lowercase letters
        At most 1 punctuation mark and only at the end
    */
    
    let punc_cnt = 0;
    let length = word.length;
    for (let i = 0; i < length; i++)
    {
        if(word[i] === "!")
        {
            if(i == length-1) continue;
            if(i==0) return false;
            if(word[i-1].charCodeAt(0) < 97 || word[i+1].charCodeAt(0) < 97) return false;
            punc_cnt++;
        }

        else if (word[i].charCodeAt(0) > 47 && word[i].charCodeAt(0) < 58) return false;

        else if (word[i] == ".")
        {
            if(i!= length-1) return false;
            // if(length < 3) return false;
            punc_cnt++;
        }
    }
    if(punc_cnt>=2) return false;
    return true;
}


function numberOfValidWords(sentence)
{
    let list = sentence.split(" ");
    let cnt = 0;
    for (l of list)
    {
        if(l.length > 0)
        {
            if(checkValid(l)) cnt++;
        }
    }   
    return cnt;
}

console.log(numberOfValidWords(sentence1));
console.log(numberOfValidWords(sentence2));
console.log(numberOfValidWords(sentence3));