// 1370. Increasing Decreasing String
// Tested successfully


let s1 = "aaaabbbbcccc", s2 = "rat";

function track(dict, forward=true)
{
    let res = "";
    if(forward)
    {
        for(key of Object.keys(dict))
        {
            if(dict[key] > 0) 
            {
                dict[key]--;
                res += key;
            }
        }
    }
    else{
        for (key of Object.keys(dict).reverse())
        {
            if(dict[key] > 0)
            {
                dict[key]--;
                res += key;
            }
        }
    }
    return res;
}


function increasingDecreasingString(string)
{
    let stringList = string.split("");
    stringList.sort();
    let dict = {};
    for (s of stringList)
    {
        if (dict[s] == undefined || dict[s] == null) dict[s] = 1;
        else dict[s]++;
    }

    let res = "";
    let forward = true;
    while(true)
    {   
        let sub_res = track(dict, forward);
        res += sub_res;
        forward = !forward;
        if(sub_res == "") break;
    }

    return res;
}
console.log(increasingDecreasingString(s1));
