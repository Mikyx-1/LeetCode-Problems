// 2224. Minimum Number of Operations to Convert Time
// Tested successfully

let current1 = "02:30", correct1 = "04:35";
let current2 = "11:00", correct2 = "11:01";


function minimumNumberOfOperationsToConvertTime(current, correct)
{
    let convertedCurrent = parseInt(current.slice(0, 2))*60 + parseInt(current.slice(4, ));
    let convertedCorrect = parseInt(correct.slice(0, 2))*60 + parseInt(correct.slice(4, ));

    let diff = convertedCorrect - convertedCurrent;

    let cnt = 0;
    while(diff!=0)
    {
        if(Math.floor(diff/60) >= 1) 
        {
            cnt += Math.floor(diff/60);
            diff = diff%60;
        }

        else if(Math.floor(diff/15) >= 1)
        {
            cnt += Math.floor(diff/15);
            diff = diff%15;
        }

        else if(Math.floor(diff/5) >= 1)
        {
            cnt += Math.floor(diff/5);
            diff = diff%5;
        }

        else
        {
            cnt += 1;
            diff--;
        }
    }
    return cnt;
}

console.log(minimumNumberOfOperationsToConvertTime(current1, correct1));
console.log(minimumNumberOfOperationsToConvertTime(current2, correct2));