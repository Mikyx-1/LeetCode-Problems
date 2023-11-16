// 1507. Reformat Date
// Tested successfully

// O(n)

let date1 = "20th Oct 2052", date2 = "6th Jun 1933", date3 = "26th May 1960";

function reformatDate(date)
{
    let monthDict = {"Jan":"01", "Feb":"02", "Mar":"03", "Apr":"04", "May":"05", "Jun":"06", "Jul":"07", 
                     "Aug":"08", "Sep":"09", "Oct":"10", "Nov":"11", "Dec":"12"}
    let [day, month, year] = date.split(" ");
    day = day.replace("th", "");
    if(day.length == 1) day = "0" + day;
    month = monthDict[month];
    return year +"-" + month + "-" +  day;
}

console.log(reformatDate(date1));
console.log(reformatDate(date2));
console.log(reformatDate(date3));