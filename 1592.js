// 1592. Rearrange Spaces Between Words
// Tested successfully

let text1 = "  this   is  a sentence ", text2 = " practice   makes   perfect";


function rearrangeSpacesBetweenWords(text)
{
    let wordList = [];
    let spaceCnt = 0;
    let startIdx = 0;
    let startFlag = false;
    let endIdx = 0;
    let numWords = 0;
    for (let i = 0; i < text.length; i++)
    {
        if(text[i] != " " && startFlag == false)
        {
            startFlag = true;
            startIdx = i;
        }

        else if (text[i] == " " && startFlag == true)
        {
            spaceCnt++;
            startFlag = false;
            wordList.push(text.slice(startIdx, i));
            numWords++;
        }

        else if(text[i] == " " && startFlag == false)
        {
            spaceCnt++;
        }

        else if(i==text.length-1 && startIdx < i) {
            wordList.push(text.slice(startIdx, ));
            numWords++
        }
    }

    let numSpaceBetween = Math.floor(spaceCnt/(numWords-1));
    let numSpaceLeft = spaceCnt%(numWords-1);
    let ans = wordList[0];
    for (let i = 1; i < numWords; i++)
    {
        ans = ans + " ".repeat(numSpaceBetween) + wordList[i];
    }
    return ans  + " ".repeat(numSpaceLeft);
}

console.log(rearrangeSpacesBetweenWords(text1).length);
console.log(rearrangeSpacesBetweenWords(text2).length);