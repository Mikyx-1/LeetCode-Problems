// 1700. Number Of Students Unable To Eat Lunch
// Tested successfully

let students1 = [1,1,0,0], sandwiches1 = [0,1,0,1];
let students2 = [1,1,1,0,0,1], sandwiches2 = [1,0,0,0,1,1];

function shift(array)
{
    array.push(array[0]);
    array.splice(0, 1);
    return array;
}


function numberOfStudentsUnableToEatLunch(students, sandwiches)
{
    let numCantEat = students.length;
    let toleration = students.length;
    let cnt = 0;
    while(true)
    {
        if(sandwiches[0] == students[0]) {
            numCantEat--;
            students = students.slice(1, );
            sandwiches = sandwiches.slice(1, );
            cnt = 0;
            toleration--;
        }
        else{
            students = shift(students);
            cnt++;

        }
        if(cnt >= toleration) break;
    }
    return numCantEat;
}

console.log(numberOfStudentsUnableToEatLunch(students1, sandwiches1));
console.log(numberOfStudentsUnableToEatLunch(students2, sandwiches2));
