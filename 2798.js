// 2798. Number of Employees Who Met the Target
// Tested successfully

let hours1 = [0,1,2,3,4], target1 = 2;
let hours2 = [5,1,4,2,2], target2 = 6;

function numberOfEmployeesWhoMetTheTarget(hours, target)
{
    let cnt = 0;
    for (h of hours) if (h >= target) cnt++;
    return cnt;
}

console.log(numberOfEmployeesWhoMetTheTarget(hours1, target1));
console.log(numberOfEmployeesWhoMetTheTarget(hours2, target2));