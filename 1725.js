// 1725. Number Of Rectangles That Can Form the Largest Square
// Tested successfully

let rectangles1 = [[5,8],[3,9],[5,12],[16,5]];
let rectangles2 = [[2,3],[3,7],[4,3],[3,7]];


function numberOfRectanglesThatCanFormTheLargestSquare(rectangles)
{
    let maxSquare = -1;
    for (rectangle of rectangles)
    {
        if(Math.min(rectangle[0], rectangle[1]) > maxSquare) maxSquare = Math.min(rectangle[0], rectangle[1]);
    }

    let cnt = 0;
    for (rect of rectangles) if (Math.min(rect[0], rect[1]) == maxSquare) cnt++;
    return cnt;
}

console.log(numberOfRectanglesThatCanFormTheLargestSquare(rectangles1));
console.log(numberOfRectanglesThatCanFormTheLargestSquare(rectangles2));