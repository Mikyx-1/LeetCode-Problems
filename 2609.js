// 2609. Find the Longest Balanced Substring of a binary String
// Tested successfully

// O(n)


let s1 = "01000111", s2 = "00111", s3 = "111";


function findTheLongestBalancedSubstring(string)
{

    let counter0 = 0;
    let counter1 = 0;
    let counter0_working_flag = false;
    let counter1_working_flag = true;
    let longestStringlength = 0;

    for (s of string)
    {
        if(s=="0") {
            counter1 = 0;
            counter0++;
        }

        else if (s=="1")
        {
            counter1++;
            length = Math.min(counter0, counter1)*2;
            if( length > longestStringlength) longestStringlength = length;
        }
    }
    return longestStringlength;
}

console.log(findTheLongestBalancedSubstring(s1));
console.log(findTheLongestBalancedSubstring(s2));
console.log(findTheLongestBalancedSubstring(s3));