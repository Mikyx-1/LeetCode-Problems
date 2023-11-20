// 2293. Min Max Game
// Tsted successfully

let nums1 = [1,3,5,2,4,8,2,2];
let nums2 = [3];

function minMaxGame(nums)
{
    let length1 = nums.length;
    if(length1==1) return nums[0];

    let orig = nums;
    while(true)
    {
        let evenTurn = true;
        let length2 = 0;
        let result = [];
        for (let i = 0; i < orig.length-1; i+=2)
        {
            if(evenTurn==true){
                result.push(Math.min(orig[i], orig[i+1]));
                evenTurn = false;
            }
            else{
                result.push(Math.max(orig[i], orig[i+1]));
                evenTurn = true;
            }
            length2++;
        }

        if(length2 == 1) return result;
        orig = result;
    }

}

console.log(minMaxGame(nums1));
console.log(minMaxGame(nums2));