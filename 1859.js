// 1859. Sorting the sentence
// Tested successfully

let s1 = "is2 sentence4 This1 a3", s2 = "Myself2 Me1 I4 and3";

function sortingTheSentence(string)
{
    let dict = {};
    let list = string.split(" ");
    let length = list.length;
    for (l of list)
    {
        let length = l.length;
        let idx = "";
        for (let i = length-1; i > -1; i--)
        {   
            code = l[i].charCodeAt(0);
            if(code <=57 && code >= 48) idx = l[i] + idx;
        }
        lengthIdx = idx.length;
        idx = parseInt(idx) - 1
        word = l.slice(0, -lengthIdx);
        if(dict[word] == null) dict[word] = [idx];
        else dict[word].push(idx);
    }

    let arr = Array([length]).fill(0);
    for (key of Object.keys(dict))
    {
        for (idx of dict[key])
        {
            arr[idx] = key;
        }
    }
    return arr;
}

console.log(sortingTheSentence(s1));
console.log(sortingTheSentence(s2));