

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(3);
const c = new Node(5);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

const a1 = new Node(2);
const b1 = new Node(4);
const c1 = new Node(6);
const d1 = new Node(8);

a1.next = b1;
// b1.next = c1;
// c1.next = d1;




function printLinkedList(root)
{
    if(root.next == null) 
    {
        console.log(root.val)
        return 
    }
    console.log(root.val);
    return printLinkedList(root.next);
}

function LL2Arr(node, arr){
    if(node.next == null || node.next == undefined)
    {
        arr.push(node.val);
        return arr
    }

    arr.push(node.val)
    return LL2Arr(node.next, arr)
}

function sumLL(node)
{
    if(node.next == null || node.next == undefined)
    {
        return node.val;
    }

    return node.val + sumLL(node.next)
}


function linkedListFind(node, target){
    if(node.next == null || node.next == undefined)
    {
        if(node.val == target) return true;
        else return false;
    }

    if(node.val == target) return true;

    return linkedListFind(node.next, target);
}

function getNodeValue(node, currIdx, targetIdx)
{
    if(currIdx == targetIdx) return node.val;

    if((node.next == null || node.next == undefined) && currIdx < targetIdx)
    {
        console.log('Your input index exceeds the length of the linked list')
        return;
    }

    return getNodeValue(node.next, currIdx+1, targetIdx);
}

function reverseLinkedList1(node)
{
    // Step 1: Extract 
    // Unneccessarily complicated
    let arr = LL2Arr(node, []);
    arr.reverse()

    function fillLL(node, idx){
        if(node.next == undefined || node.next == null)
        {
            node.val = arr[idx];
            return 
        }

        node.val = arr[idx];
        return fillLL(node.next, idx+1);
    }

    fillLL(node, 0);
    printLinkedList(node);
}

function reverseLinkedList2(node, prevNode = null)
{
    if (node.next == null || node.next == undefined)
    {
        node.next = prevNode;
        return node;
    }

    next_node = node.next;
    node.next = prevNode;
    return reverseLinkedList2(next_node, node)
}

function zipLL(nodeA, nodeB)
{
    if(nodeA == null && nodeB == null) return;

    if(nodeA != null && nodeB == null){
        return zipLL(nodeA.next, nodeB)
    }

    if(nodeA == null && nodeB != null)
    {
        nodeA = nodeB;
        return zipLL(nodeA, nodeB.next)
    }

    if(nodeA != null && nodeB != null)
    {   
        nodeA_cache_next = nodeA.next.next;
        nodeA.next = nodeB;
        return zipLL(nodeA_cache_next, nodeB.next);
    }
}


function zipLL(nodeA, nodeB)
{
    if(nodeA == null && nodeB == null) return;

    if(nodeA != null && nodeB == null) 
    {
        return zipLL(nodeA.next, nodeB);
    }

    if(nodeA == null && nodeB != null)
    {   
        nodeA = nodeB;
        return zipLL(nodeA.next, null)
    }

    if(nodeA != null && nodeB != null)
    {
        cache_nodeB = new Node(nodeB.val);
        cache_nodeB.next = nodeB.next;

        cache_nodeA = new Node(nodeA.val);
        cache_nodeA.next = nodeA.next;

        nodeA.next = nodeB;
        nodeB.next = cache_nodeA.next;

        return zipLL(cache_nodeA.next, cache_nodeB.next);
    
    }
}

zipLL(a, a1);
printLinkedList(a);