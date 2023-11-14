// 1496. Path Crossing
// Tested successfully

let path1 = "NES", path2 = "NESWW"


function formatCoord(coord, move)
{
    /*
    Arguments: 
    coord "xy": Current location of the robot
    move "xy": The next move
    */
    let result = "";
    for (let i = 0; i < 2; i++)
    {   
        if(move[i] == "_") result += coord[i];
        else result = result + (parseInt(coord[i]) + eval(move[i]+"1")).toString()
    }
    return result;
}


function checkPathCrossing(path)
{
    let dict = {"00": "crossed"};
    let currentLocation = "00";
    for (let p of path)
    {
        if(p=="N") move = "_+";
        else if(p == "S") move = "_-"
        else if(p == "E") move = "+_"
        else if(p == "W") move = "-_"
        currentLocation = formatCoord(currentLocation, move)
        if(dict[currentLocation] == "crossed") return true;
        dict[currentLocation] = "crossed"
    }
    return false;
}

console.log(checkPathCrossing(path1));
console.log(checkPathCrossing(path2));