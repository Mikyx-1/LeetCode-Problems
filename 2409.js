// 2409. Count Days Spent together
// Tested successfully

let arriveAlice1 = "08-15", leaveAlice1 = "08-18", arriveBob1 = "08-16", leaveBob1 = "08-19";
let arriveAlice2 = "10-01", leaveAlice2 = "10-31", arriveBob2 = "11-01", leaveBob2 = "12-31";
let arriveAlice3 = "06-01", leaveAlice3 = "06-30", arriveBob3 = "05-29", leaveBob3 = "06-02";


function transformSpace(date)
{
    let days_of_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currDays = 0;
    let runningLength = [];
    for (d of days_of_months)
    {
        runningLength.push(currDays)
        currDays += d;

    }
    return runningLength[parseInt(date.slice(0, 2)) - 1] + parseInt(date.slice(3, ));
}

function countDaysSpentTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)
{
    let alice_AT = transformSpace(arriveAlice);
    let alice_DT = transformSpace(leaveAlice);

    let bob_AT = transformSpace(arriveBob);
    let bob_DT = transformSpace(leaveBob);
    
    if(bob_AT < alice_AT) return countDaysSpentTogether(arriveBob, leaveBob, arriveAlice, leaveAlice);
    let numDaysTogether = 0;
    for (let i = alice_AT; i <= alice_DT; i++)
    {
        if(i>=bob_AT) numDaysTogether++;
    }
    return numDaysTogether;
}

console.log(countDaysSpentTogether(arriveAlice1, leaveAlice1, arriveBob1, arriveBob1));
console.log(countDaysSpentTogether(arriveAlice2, leaveAlice2, arriveBob2, arriveBob2));
console.log(countDaysSpentTogether(arriveAlice3, leaveAlice3, arriveBob3, leaveBob3));
