// 925. Long Pressed Name
// Tested successfully

let name1 = "alex";
let typed1 = "aaleex";

let name2 = "saeed";
let typed2 = "ssaedd";


function longPressedName(name, typed){
    let idx1 = 0, idx2 = 0;
    let nameLength = name.length; typedLength = typed.length;

    if (nameLength == 0 && nameLength == 0) return true;

    if (nameLength > typedLength) return false;

    let nameComponent = name[0];
    let typedComponent = typed[0];
    
    for (let i = 1; i < nameLength; i++)
    {
        if(nameComponent[0] == name[i]) nameComponent += name[i];
        else break;
    }

    for (let i = 1; i < typedLength; i++)
    {
        if(typedComponent[0] == typed[i]) typedComponent += typed[i];
        else break;
    }
    
    if (typedComponent.length < nameComponent.length) return false;

    return longPressedName(name.slice(nameComponent.length), typed.slice(typedComponent.length, ))
}

console.log(longPressedName(name1, typed1));
console.log(longPressedName(name2, typed2));
console.log(longPressedName("Viet", "VVVVVVVVVVVVVVVVVVVVVVVVVieeeeeeeeeeeeetttttttttttt"));