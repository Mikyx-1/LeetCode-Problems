// 860. Lemonade Change
// Tested successfully

let bills1 = [5, 5, 5, 10, 20];
let bills2 = [5, 5, 10, 10, 20];


// available cash = {5: 3, 10:1}
function returnChange(availableCash, guestCash)
{
    let change = guestCash - 5;
    
    availableCash[guestCash]++;

    if (change==5){
        availableCash["5"]--;
    }
    else if (change==15){
        if(availableCash["10"] > 0 && availableCash["5"] > 0)
        {
            availableCash["10"]--;
            availableCash["5"]--
        }

        else availableCash["5"] = availableCash["5"] - 3;
    }
    

    return availableCash;
}

function lemonadeChange(bills)
{
    let availableCash = {"5": 0, "10": 0, "20":0};

    for (bill of bills)
    {
        availableCash = returnChange(availableCash, bill);
        
    }
    for (key of Object.keys(availableCash))
    {
        if(availableCash[key] < 0) return false;
    }
    return true;
}

console.log(lemonadeChange(bills1));
console.log(lemonadeChange(bills2));