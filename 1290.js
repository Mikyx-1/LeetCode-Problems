// 1290. Convert Binary Number in a Linked List to Integer
// Tested successfully

class Node{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

const head = new Node(1);
head.next = new Node(0);
head.next.next = new Node(1);


function bin2Dec(string)
{   
    let result = 0;
    let length = string.length;
    for (let i = 0; i < length; i++)
    {
        result += parseInt(string[i])*Math.pow(2, length-i-1)
    }
    return result;
}

function LL2Dec(head){
    let currNode = head;
    let bin = "";
    while(currNode.next != null)
    {
        bin += currNode.val.toString();
        currNode = currNode.next;
    }
    bin += currNode.val;
    return bin2Dec(bin);
}

console.log(LL2Dec(head));
