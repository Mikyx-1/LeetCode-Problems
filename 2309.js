// 2309. Greatest English Letter in Upper and Lower Case
// Tested successfully

// Need space improvement

let s1 = "lEeTcOdE", s2 = "arRAzFif", s3 = "AbCdEfGhIjK";

function greatestEnglishLetterInUpperAndLowerCase(string)
{
    let dict = {};
    let maxQualifiedChar = -1;

    for (s of string)
    {
        if(s.charCodeAt(0) < 95) needWord = s.toLowerCase();
        else needWord = s.toUpperCase();

        if(dict[s] == null) dict[s] = "w";
        else {
            if(s.toLowerCase().charCodeAt(0) > maxQualifiedChar)
            {
                maxQualifiedChar = s;
            }
        }

        if(dict[needWord] == null) dict[needWord] = "w";
        else{
            if(needWord.toLowerCase().charCodeAt(0) > maxQualifiedChar)
            {
                maxQualifiedChar = needWord;
            }
        }
    }
    if(maxQualifiedChar == -1) return "";
    return maxQualifiedChar.toUpperCase();
}

console.log(greatestEnglishLetterInUpperAndLowerCase(s1));
console.log(greatestEnglishLetterInUpperAndLowerCase(s2));
console.log(greatestEnglishLetterInUpperAndLowerCase(s3));