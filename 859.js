// 859. Buddy Strings
// Tested successfully

let s1 = "ab", goal1 = "ba";
let s2 = "ab", goal2 = "ab";
let s3 = "aa", goal3 = "aa";

function checkBuddyStrings(s, goal)
{
    for (let i = 0; i < s.length; i++)
    {
        for (let j = i+1; j < s.length; j++)
        {
            temp = s.slice(0, i) + s[j] + s.slice(i+1, j) + s[i] + s.slice(j+1, );
            if(temp == goal) return true;
        }
    }
    return false;
}

console.log(checkBuddyStrings(s1, goal1));
console.log(checkBuddyStrings(s2, goal2));
console.log(checkBuddyStrings(s3, goal3));



