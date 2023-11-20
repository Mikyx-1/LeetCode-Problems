// 914. x of a kind in a deck of cards

let deck1 = [1,2,3,4,4,3,2,1];
let deck2 = [1,1,1,2,2,2,3,3];

function xOfAKindInADeckOfCards(deck)
{
    let dict = {};
    for (de of deck)
    {
        if(dict[de] == null) dict[de] = 1;
        else dict[de]++;
    }

    let prevValue = null
    for (value of Object.values(dict))
    {
        if(prevValue==null){
            if(value==1) return false;
            prevValue = value;
        } 
        else {
            if(prevValue != value) return false;
        }
    }
    return true;
}

console.log(xOfAKindInADeckOfCards(deck1));
console.log(xOfAKindInADeckOfCards(deck2));