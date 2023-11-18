// 1893. Check if all the integers in a range are covered
// Tested successfully

// O(n)

let ranges1 = [[1,2],[3,4],[5,6]], left1 = 2, right1 = 5;
let ranges2 = [[1,10],[10,20]], left2 = 21, right2 = 21;

function checkIfAllTheIntegersInARangeAreCovered(ranges, left, right)
{
    let ptr = left;
    
    while(ptr <= right)
    {
        contFlag = false;
        for (range of ranges)
        {
            smallestVal = range[0];
            largestVal = range[1];
            if (ptr >= smallestVal && ptr <= largestVal)
            {
                contFlag = true;
                if(largestVal >= right) return true;
                else ptr = largestVal
            }
            else ptr++;
        }
        if(contFlag==false) return false;
    }

    return true;
}

console.log(checkIfAllTheIntegersInARangeAreCovered(ranges1, left1, right1));
console.log(checkIfAllTheIntegersInARangeAreCovered(ranges2, left2, right2));
