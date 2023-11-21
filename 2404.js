// 2404. Most Frequent Even element
// Tested successfully

let nums1 = [0,1,2,2,4,4,1], nums2 = [4,4,4,9,2,4], nums3 = [29,47,21,41,13,37,25,7];


function mostFrequentEvenElement(nums)
{
    let maxFrequency = -1;
    let maxFrequentEle = -1;
    let dict = {};
    for (n of nums)
    {
        if(n%2==0)
        {
            if(dict[n] == null) dict[n] = 1;
            else dict[n]++;
            
            if(dict[n] > maxFrequency)
            {
                maxFrequency = dict[n];
                maxFrequentEle = n;
            }
        }
    }
    return maxFrequentEle;
}

console.log(mostFrequentEvenElement(nums1));
console.log(mostFrequentEvenElement(nums2));
console.log(mostFrequentEvenElement(nums3));