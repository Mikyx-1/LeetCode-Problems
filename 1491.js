// 1491. Average Salary Excluding the Minimum and Maximum Salary
// Tested successfully

let salary1 = [4000, 3000, 1000, 2000], salary2 = [1000, 2000, 3000];


function averageSalaryExcludingMinAndMax(salary)
{
    let maxSalary = salary[0];
    let minSalary = salary[0];
    let sum = salary[0];
    let length = salary.length;
    for (let i = 1; i < length; i++)
    {
        sum += salary[i];
        if(salary[i] > maxSalary) maxSalary = salary[i];
        if(salary[i] < minSalary) minSalary = salary[i]; 
    }

    return (sum - maxSalary - minSalary)/(length-2) 
}


console.log(averageSalaryExcludingMinAndMax(salary1));
console.log(averageSalaryExcludingMinAndMax(salary2));