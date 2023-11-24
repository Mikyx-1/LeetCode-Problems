// 2525. Categorize Box According to Criteria
// Tested successfully

let length1 = 1000, width1 = 35, height1 = 700, mass1 = 300;
let length2 = 200, width2 = 50, height2 = 800, mass2 = 50;

function categorizeBoxAccordingToCriteria(length, width, height, mass)
{
    let volume = length*width*height;
    let classes = []
    if(volume>=1e9 || length >= 1e4 || width >= 1e4 || height >= 1e4)  classes.push("Bulky");

    if(mass >= 100) classes.push("Heavy");


    if(classes.length == 0) return "neither";

    if(classes.length == 1)
    {
        return classes[0];
    }

    if((classes[0] == "B" && classes[1] == "H") || (classes[1] == "H" && classes[0] == "B")) return "Both";
}

console.log(categorizeBoxAccordingToCriteria(length1, width1, height1, mass1));
console.log(categorizeBoxAccordingToCriteria(length2, width2, height2, mass2));