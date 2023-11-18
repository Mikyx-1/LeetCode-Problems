// 2839. Check If Strings Can be made equal with Operations I
// Tested successfully

let s1 = "abcd", s2 = "cdab";

function checkIfStringsCanBeMAdeEqual(s1, s2)
{

    if (s1 == s2) return true;

    if(s1[0] != s2[0] || s1[1] != s2[1])
    {
        if(s1[2] + s1[1] + s1[0] + s1[3] == s2) return true;
        else if (s1[2] + s1[3] + s1[0] + s1[1] == s2) return false;

        if(s1[0] + s1[3] + s1[2] + s1[1] == s2) return true;

        return false;
    }
}


console.log(checkIfStringsCanBeMAdeEqual(s1, s2));
console.log(checkIfStringsCanBeMAdeEqual("abcd", "dacb"));
console.log(checkIfStringsCanBeMAdeEqual("17a3", "a713"));