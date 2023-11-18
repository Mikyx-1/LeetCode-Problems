// 1773. Count Items Matching a Rule
// Tested successfully

let items1 = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey1 = "color", ruleValue1 = "silver";
let items2 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey2 = "type", ruleValue2 = "phone";


function countItemsMatchingARule(items, ruleKey, ruleValue)
{
    let searchIdx = null;
    if(ruleKey=="type") searchIdx = 0;
    else if (ruleKey == "color") searchIdx = 1;
    else searchIdx = 2;

    let cnt = 0;
    for (item of items)
    {
        if(item[searchIdx] == ruleValue) cnt++;
    }

    return cnt;
}

console.log(countItemsMatchingARule(items1, ruleKey1, ruleValue1));
console.log(countItemsMatchingARule(items2, ruleKey2, ruleValue2));