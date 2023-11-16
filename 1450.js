// 1450. Number of Students Doing Homework at a Given time
// Tested successfully

let startTime1 = [1, 2, 3], endTime1 = [3, 2, 7], queryTime1 = 4;
let startTime2 = [4], endTime2 = [4], queryTime2 = 4;


function numberOfStudentsDoingHomeworkAtAGivenTime(startTime, endTime, queryTime)
{
    let cnt = 0;
    for (let i = 0; i < startTime.length; i++)
    {
        if(startTime[i] <= queryTime && endTime[i] >= queryTime) cnt++;
    }
    return cnt;
}

console.log(numberOfStudentsDoingHomeworkAtAGivenTime(startTime1, endTime1, queryTime1));
console.log(numberOfStudentsDoingHomeworkAtAGivenTime(startTime2, endTime2, queryTime2));