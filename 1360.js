// 1360. Number of Days Between 2 Dates
// Tested successfully

// let date1 = "2019-06-29", date2 = "2019-06-30";
let date1 = "2020-01-15", date2 = "2019-12-31";

let monOf30 = []


function nextDate(date)
{
    let [year, month, day] = date.split("-").map(eval);
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(year%4==0) monthDays[1] = 29;
    day++;
    if(day > monthDays[month-1]) 
    {
        day = 1;
        month++;
    }
    if(month > 12){
        month = 1;
        year++;
    }
    month = month.toString();
    day = day.toString();
    if(month.length==1) month = "0" + month;
    if(day.length==1) day = "0" + day;
    return [year.toString(), month, day].join("-");
}

function numberOfDaysBetween2Dates(date1, date2)
{
    let [year1, month1, day1] = date1.split("-").map(eval);
    let [year2, month2, day2] = date2.split("-").map(eval);

    if(year2<year1) return numberOfDaysBetween2Dates(date2, date1);
    else if(year1 == year2 && month2 < month1) return numberOfDaysBetween2Dates(date2, date1);
    else if (year1 == year2 && month1==month2) return Math.abs(day1-day2);

    let cnt = 0;
    while(date1 != date2)
    {
        date1 = nextDate(date1);
        cnt++;
    }
    return cnt;
}
// console.log(numberOfDaysBetween2Dates(date1, date2));
console.log(numberOfDaysBetween2Dates("2023-01-01", "2023-12-31"));