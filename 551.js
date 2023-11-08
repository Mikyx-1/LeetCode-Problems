// 551. Student Attendance Record I
// Tested successfully


let s1 = "PPALLP", s2 = "PPALLL";




function studentAttendanceRecordI(s)
{
    let absent_count = 0;
    let length = s.length;
    for (let i = 0; i < length; i++)
    {
        if ( i <= s.length - 3)
        {
            if (s.slice(i, i+3) == "LLL") return false;
            }

        if (s[i] == "A") absent_count++;

        if (absent_count >= 2) return false;
    }

    return true;
}


console.log(studentAttendanceRecordI(s1));
console.log(studentAttendanceRecordI(s2));

