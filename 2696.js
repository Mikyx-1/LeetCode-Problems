// 2696. Minimum String Length After Removing Substrings
// Tested successfully

// O(n) time, O(1) space


let s1 = "ABFCACDB", s2 = "ACBBD";

function minimumStringLengthAfterRemovingSubstrings(s)
{
    let ptr1 = 0;
    let ptr2 = 1;
    const length = s.length;
    let cnt = length; 
    while(ptr2<length && ptr1 >= 0)
    {

        pair = s[ptr1] + s[ptr2];
        if(pair == "AB" || pair == "CD")
        {
            // console.log(`pointer: ${ptr1}, ${ptr2}`)
            cnt -= 2;
            if(ptr1 == 0)
            {
                ptr1+=2;
                ptr2+=2;
            }
            else{
                ptr1--;
                ptr2++;
            }
        }
        else{
            ptr2++;
            ptr1 = ptr2-1;
        }
    }
    return cnt;
}


console.log(minimumStringLengthAfterRemovingSubstrings(s1));
console.log(minimumStringLengthAfterRemovingSubstrings(s2));
console.log(minimumStringLengthAfterRemovingSubstrings("ABABCDABCDEFGHAB"));