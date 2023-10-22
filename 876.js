// 876: Middle of the Linked List
// Tested successfully

class Node{
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

function middleOfTheLinkedList(head){
    let cnt = 1;
    let nodeArr = [head];
    let node = head;
    while(node.next != null)
    {
        nodeArr.push(node);
        cnt++;
        node = node.next;
    }
    if (cnt > 1){
        nodeArr.push(node);
        cnt++;
        return nodeArr[Math.floor(cnt/2) + 1] 
    }

    return nodeArr[0] 
}

console.log(middleOfTheLinkedList(head));