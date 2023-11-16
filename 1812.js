// 1812. Determine Color of a Chessboard Square
// Tested successfully

let coordinates1 = "a1", coordinates2 = "h3", coordinates3 = "c7";

function determineColor(coordinates)
{
    if(coordinates.charCodeAt(0)%2==1)
    {
        if(parseInt(coordinates[1])%2==1) return false;
        return true;
    }

    else{
        if(parseInt(coordinates[1])%2==1) return true;
        return false;
    }
}

console.log(determineColor(coordinates1));
console.log(determineColor(coordinates2));
console.log(determineColor(coordinates3));