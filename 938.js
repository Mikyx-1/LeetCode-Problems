// 938. Range Sum of BST
// Tested successfully


class Node{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(7);

root.right = new Node(15);
root.right.right = new Node(18);

let low = 7, high = 15;

function rangeSumOfBST(node, low, high)
{
    if (node == null) return 0;

    if (node.val < low) return rangeSumOfBST(node.right, low, high);
    if (node.val > high) return rangeSumOfBST(node.left, low, high);

    return node.val + rangeSumOfBST(node.left, low, high) + rangeSumOfBST(node.right, low, high);
}

console.log(rangeSumOfBST(root, low, high));