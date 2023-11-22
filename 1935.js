// 1935. Maximum Number of Words you can Type
// Tested successfully

let text1 = "hello world", brokenLetters1 = "ad";
let text2 = "leet code", brokenLetters2 = "lt";
let text3 = "leet code", brokenLetters3 = "e";

function maximumNumberOfWordsYouCanType(text, brokenLetters)
{
    let dict = {};
    for (brokenLetter of brokenLetters) dict[brokenLetter] = 1;

    let cnt = 0;
    let validWord = true;
    for (let i = 0; i < text.length; i++)
    {
        if(text[i] == " ")
        {
            if(validWord==true) cnt++;
            validWord = true;
        }

        else
        {
            if(dict[text[i]] == 1) {
                validWord = false;

            }
        }
    }

    if (validWord==true && dict[text[text.length-1]] == null) cnt++;

    return cnt;
}

console.log(maximumNumberOfWordsYouCanType(text1, brokenLetters1));
console.log(maximumNumberOfWordsYouCanType(text2, brokenLetters2));
console.log(maximumNumberOfWordsYouCanType(text3, brokenLetters3));
