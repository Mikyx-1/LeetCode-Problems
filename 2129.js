// 2129. Capitalize The Title
// Tested successfully

let title1 = "capiTalIze tHe titLe", title2 = "First leTTeR of EACH Word";
let title3 = "i lOve leetcode";


function capitalizetheTitle(title)
{
    let list = title.split(" ");
    for (let i = 0; i < list.length; i++)
    {
        if(list[i].length < 3) list[i] = list[i].toLowerCase();
        
        else list[i] = list[i][0].toUpperCase() + list[i].slice(1, ).toLowerCase();
    }
    

    return list.join(" ");
}

console.log(capitalizetheTitle(title1));
console.log(capitalizetheTitle(title2));
console.log(capitalizetheTitle(title3));
console.log(capitalizetheTitle("hi my name is viet"));