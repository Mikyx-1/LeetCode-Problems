// 1805. Number of Different Integers in a string
// Tested successfully

let word1 = "a123bc34d8ef34", word2 = "leet1234code234";
let word3 = "a1b01c001";

function numberOfDifferentIntegersInAString(word)
{
    let dict = {};
    let num = "";
    for (w of word)
    {   
        if(w.charCodeAt(0) > 47 && w.charCodeAt(0) < 58)
        {
            num += w;
        }
        else{
            if(num.length > 0)
            {
                num = eval(num)
                if(dict[num] == null) dict[num] = 1;
                else dict[num]++;
                num = "";

            }

        }
    }
    let cnt = 0;
    for (key of Object.keys(dict)) cnt++;

    if(num.length > 0){
        num = eval(num);
        if(dict[num] == null) cnt++;
    }

    return cnt;
}

console.log(numberOfDifferentIntegersInAString(word1));
console.log(numberOfDifferentIntegersInAString(word2));
console.log(numberOfDifferentIntegersInAString(word3));
