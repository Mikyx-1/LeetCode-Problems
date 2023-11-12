// 482. License Key Formatting
// Tested successfully

let s1 = "5F3Z-2e-9-w", k1 = 4;
let s2 = "2-5g-3-J", k2 = 2;


function partitionString(string, k)
{
    let list = string.split("");
    let result = "";
    for (let i = 0; i < list.length-k+1; i = i+k)
    {   
        result = result + string.slice(i, i+k) + "-"
    }
    return result.slice(0, -1);
}

function licenseKeyFormatting(s, k)
{
    let list = s.split("-").join("");
    for (let i = 0; i < list.length; i++)
    {
        if((list.length - i) %k == 0 && i != 0)
        {
            return list.slice(0, i).toUpperCase() + "-" + partitionString(list.slice(i, ), k).toUpperCase();
        }

        else if ((list.length - i)% k == 0 && i == 0)
        {
            return list.slice(0, i).toUpperCase() + partitionString(list.slice(i, ), k).toUpperCase()
        }
    }
}

console.log(licenseKeyFormatting(s1, k1));
console.log(licenseKeyFormatting(s2, k2));
