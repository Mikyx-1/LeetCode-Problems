// 2678: Number of Senior Citizens
// Tested successfully

let details1 = ["7868190130M7522","5303914400F9211","9273338290F4010"];
let details2 = ["1313579440F2036","2921522980M5644"];


function numSenior(details)
{
    let num = 0;
    for (detail of details)
    {
        if(parseInt(detail.slice(11, 13)) >= 60) num++;
    }
    return num;
}


console.log(numSenior(details1));
console.log(numSenior(details2));
