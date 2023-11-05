// 24. Swap Nodes in Pairs
// Tested successfully (Need Revise)

class Node{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);


function swapNodesInPairs(head) {

    if(head == null || head.next == null)
    {
        return head;
    }

    let dummy = new Node(0);
    
    dummy.next = head;
    let prevNode = dummy;

    while(head != null && head.next != null)
    {
        firstNode = head;
        secondNode = head.next;

        prevNode.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        prevNode = firstNode;
        head = firstNode.next;

    }

    return dummy.next;
}

console.log(swapNodesInPairs(head));