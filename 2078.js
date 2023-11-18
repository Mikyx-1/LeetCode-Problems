// 2078. Two Furthest Houses With Different Colors
// Tested successfully

let colors1 = [1,1,1,6,1,1,1], colors2 = [1,8,3,8,3], colors3 = [0, 1];


function distanceBetween2DifferentHouses(colors)
{

    let leftIdx = 0;
    let length = colors.length;
    let rightIdx = length - 1;
    while(leftIdx < length)
    {
        for (let i = rightIdx; i > leftIdx; i--)
        {
            if(colors[leftIdx] != colors[rightIdx]) return rightIdx - leftIdx ;
        }
        leftIdx++;
    }
    
}

console.log(distanceBetween2DifferentHouses(colors1));
console.log(distanceBetween2DifferentHouses(colors2));
console.log(distanceBetween2DifferentHouses(colors3));