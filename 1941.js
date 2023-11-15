// 1941. Check If all characters have equal number of occurrences
// Tested successfully

let s1 = "abacbc", s2 = "aaabb";

function check(s){
    
    let dict = {};
    for (item of s)
    {
        if(dict[item] == null) dict[item] = 1;
        else dict[item]++;
    }
    
    let prevValue = -1;
    for (value of Object.values(dict))
    {
        if(prevValue == -1) prevValue = value;
        else {
            if(value != prevValue) return false;
        }
    }
    return true;
}

console.log(check(s1));
console.log(check(s2));