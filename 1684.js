// 1684. Count the Number of Consistent Strings
// Tested successfully

let allowed1 = "ab", words1 = ["ad","bd","aaab","baa","badab"];
let allowed2 = "abc", words2 = ["a","b","c","ab","ac","bc","abc"];
let allowed3 = "cad", words3 = ["cc","acd","b","ba","bac","bad","ac","d"];


function countTheNumberOfConsistentStrings(allowed, words)
{
    let dict = {};
    for (a of allowed) {
        dict[a] = 1;
    }
    let cnt = 0;
    for (w of words)
    {
        cnt++;
        for(item of w)
        {
            if(dict[item] == null){
                cnt--;
                break;
            }
        }
    }
    return cnt;
}
console.log(countTheNumberOfConsistentStrings(allowed1, words1));
console.log(countTheNumberOfConsistentStrings(allowed2, words2));
console.log(countTheNumberOfConsistentStrings(allowed3, words3));