// 917: Reverse Only Letters
// Tested successfully

s1 = "ab-cd"
s2 = "a-bC-dEf-ghIj"
s3 = "Test1ng-Leet=code-Q!"


function checkEnglishCharacter(character)
{   let value = character.charCodeAt(0);
    if (64 < value && value < 91 || 96 < value && value < 123) return true;
    return false;
}

function reverseOnlyLetters(string)
{
    let leftPtr = 0;
    let rightPtr = string.length - 1;
    let stringList = string.split("");
    while(leftPtr < rightPtr)
    {   
        leftASCIIValue = string[leftPtr];
        rightASCIIValue = string[rightPtr];

        if(checkEnglishCharacter(leftASCIIValue) && 
        checkEnglishCharacter(rightASCIIValue))
        {
            cache = stringList[leftPtr];
            stringList[leftPtr] = stringList[rightPtr];
            stringList[rightPtr] = cache;
            leftPtr++;
            rightPtr--;
        }
        else if (checkEnglishCharacter(leftASCIIValue) && 
        !checkEnglishCharacter(rightASCIIValue))
        {
            rightPtr--;
        }
        else if (!checkEnglishCharacter(leftASCIIValue) && 
        checkEnglishCharacter(rightASCIIValue))
        {
            leftPtr++;
        }

        else{
            leftPtr++;
            rightPtr--;
        }

    }
    return stringList;
}

console.log(reverseOnlyLetters(s1))
console.log(reverseOnlyLetters(s2))
console.log(reverseOnlyLetters(s3))
// console.log(checkEnglishCharacter("-"));