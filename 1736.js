// 1736. Latest Time by Replacing Hidden Digits
// Tested successfully

// O(1)

let time1 = "2?:?0", time2 = "0?:3?", time3 = "1?:22";

function latestTimebyReplacingHiddenDigits(time)
{
    let [hour, minute] = time.split(":");
    if(hour[0] == "?" && parseInt(hour[1]) > 4) hour = "1" + hour[1];
    else if(hour[0] == "?" && parseInt(hour[1]) <=4) hour = "2" + hour[1];
    else if(hour[1] == "?" && parseInt(hour[0]) ==2) hour = hour[0] + "3";
    else if(hour[1] == "?" && parseInt(hour[0]) < 2) hour = hour[0] + "9";
    else if (hour[0] == "?" && hour[1] == "?") hour = "23"

    if(minute[0] == "?" && minute[1] != "?") minute = "5" + minute[1];
    else if(minute[1] == "?" && minute[0] != "?") minute = minute[0] + "9";
    else if (minute[0] == "?" && minute[1] == "?") minute = "59";
    
    return [hour, minute].join(":");
}

console.log(latestTimebyReplacingHiddenDigits(time1));
console.log(latestTimebyReplacingHiddenDigits(time2));
console.log(latestTimebyReplacingHiddenDigits(time3));