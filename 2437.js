// 2437. Number of Valid Clock Times
// Tested successfully

let time1 = "?5:00", time2 =  "0?:0?", time3 = "??:??";

function numberOfValidClockTimes(time)
{
    let factor1_ways = 1;
    let factor2_ways = 1;
    let factor3_ways = 1;
    let factor4_ways = 1;
    if(time[4] == "?") factor4_ways = 10;
    if(time[3] == "?") factor3_ways = 6;
    if(time[0] == "?" && time[1] != "?")
    {
        if(time[1] < "4") factor1_ways = 3;
        else factor1_ways = 2;
    }

    if(time[0] == "?" && time[1] == "?") 
    {
        return 24*factor3_ways*factor4_ways;
    }
    if(time[0] != "?" && time[1] == "?")
    {
        if(time[0] < "2") factor2_ways = 10;
        else factor2_ways = 4;
    }

    return factor1_ways*factor2_ways*factor3_ways*factor4_ways;
}

console.log(numberOfValidClockTimes(time1));
console.log(numberOfValidClockTimes(time2));
console.log(numberOfValidClockTimes(time3));