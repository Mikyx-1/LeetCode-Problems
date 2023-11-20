// 2446. Determine if 2 Events have conflict
// Tested successfully

let event11 = ["01:15","02:00"], event21 = ["02:00","03:00"];
let event12 = ["01:00","02:00"], event22 = ["01:20","03:00"];
let event13 = ["10:00","11:00"], event23 = ["14:00","15:00"];


// Event1 must start 1st
function determineIfTwoEventsHaveConflict(event1, event2)
{
    let event1Log = [];
    let event2Log = [];
    for (ev1 of event1)
    {
        let [hour, minute] = ev1.split(":");
        hour = parseInt(hour);
        minute = parseInt(minute);
        event1Log.push([hour, minute]);
    }
    for (ev2 of event2)
    {
        let [hour, minute] = ev2.split(":");
        hour = parseInt(hour);
        minute = parseInt(minute);
        event2Log.push([hour, minute]);
    }

    if(event2Log[0][0] < event1Log[0][0]) return determineIfTwoEventsHaveConflict(event2, event1);


    if(event2Log[0][0] > event1Log[1][0]) return false;
    else if (event2Log[0][0] == event1Log[1][0])
    {
        if(event2Log[0][1] > event1Log[1][1]) return false;
        return true;
    }
    else return true;
}

console.log(determineIfTwoEventsHaveConflict(event11, event21));
console.log(determineIfTwoEventsHaveConflict(event12, event22));
console.log(determineIfTwoEventsHaveConflict(event13, event23));