// 1221. Split a string in balanced strings
// Tested successfully

let s1 = "RLRRLLRLRL", s2 = "RLRRRLLRLL", s3="LLLLRRRR";



function splitStringInBalancedStrings(string)
{
    let dict = {"R": 0, "L":0}
    let result = [];
    for (let s of string)
    {
        dict[s]++;

        if(dict["R"] == dict["L"] && dict["R"] != 0) 
        {
            result.push("R".repeat(dict["R"]) + "L".repeat(dict["L"]));
            dict["R"] = 0;
            dict["L"] = 0;

        }
    }

    return result.length;
}

console.log(splitStringInBalancedStrings(s1));
console.log(splitStringInBalancedStrings(s2));
console.log(splitStringInBalancedStrings(s3));

