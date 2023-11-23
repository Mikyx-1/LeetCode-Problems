// 49. Group Anagrams
// Tested successfully

let strs1 = ["eat","tea","tan","ate","nat","bat"], strs2 = [""], strs3 = ["a"];

function compareDict(dict1, dict2)
{
    for(key of Object.keys(dict1))
    {
        if (dict2[key] != dict1[key]) return false;
    }
    return true;
}

function groupAnaGrams(strs)
{

    let arrayOfDicts = [];
    for (str of strs)
    {
        let dict = {};
        for (s of str)
        {
            if(dict[s] == null) dict[s] = 1;
            else dict[s]++;
        }
        arrayOfDicts.push(dict);
    }

    let ans = [];
    for (let i = 0; i < arrayOfDicts.length; i++)
    {
        if(arrayOfDicts[i] != "grouped")
        {
            group = [strs[i]];
            for (let j = i+1; j < arrayOfDicts.length; j++)
            {
                if(compareDict(arrayOfDicts[i], arrayOfDicts[j]))
                {
                    group.push(strs[j])
                    arrayOfDicts[j] = "grouped"
                }
            }
            ans.push(group);
        }
    }
    return ans;
}

console.log(groupAnaGrams(strs1));
console.log(groupAnaGrams(strs2));
console.log(groupAnaGrams(strs3));