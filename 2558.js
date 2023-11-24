// 2558. Take Gifts From the Riches Pile
// Tested successfully

let gifts1 = [25,64,9,4,100], k1 = 4;
let gifts2 = [1,1,1,1], k2 = 4;

function takeGiftsFromTheRichestPile(gifts, k)
{
    for (let i = 0; i < k; i++)
    {
        let max = -1;
        let maxPos = 0;
        for (let j = 0; j < gifts.length; j++)
        {
            if(gifts[j] > max) {
                max = gifts[j];
                maxPos = j;
            }
        }
        gifts[maxPos] = Math.floor(Math.sqrt(max));

    }
    let sum = 0;
    for (gift of gifts) sum += gift;
    return sum; 
}

console.log(takeGiftsFromTheRichestPile(gifts1, k1));
console.log(takeGiftsFromTheRichestPile(gifts2, k2));