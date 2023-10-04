# 1154: Day of the Year
# Tested successfully

date1 = "2019-01-09"
date2 = "2019-02-10"
date3 = "2016-03-01"

def dayOftheYear(date):
    numDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    year, month, day = map(int, date.split("-"))

    isleafYear = True if year%4 == 0 else False
    result = 1 if month > 2 and isleafYear else 0

    for i in range(month):
        result += numDays[i]
        
    result += day
    return result

print(dayOftheYear(date1))
print(dayOftheYear(date2))
print(dayOftheYear(date3))