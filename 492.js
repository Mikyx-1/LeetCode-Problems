// 492. Construct the Rectangle
// Tested successfully

let area1 = 4, area2 = 37, area3 = 122122;

function constructTheRectangle(area)
{
    let squareRoot = Math.floor(Math.sqrt(area));
    let length = squareRoot, width = squareRoot;
    let multiplication = length*width;

    while(length*width != area)
    {
        if(length*width < area && length < area) length++;

        if(length * width > area && width > 1) width--;
    }
    
    return [length, width]
}


console.log(constructTheRectangle(area1));
console.log(constructTheRectangle(area2));
console.log(constructTheRectangle(area3));