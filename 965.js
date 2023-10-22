// 965. Univalued Binary Tree
// Tested successfully


class Node {
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const root = new Node(1);
// root.left = new Node(1);
// root.left.left = new Node(1);
// root.left.right = new Node(1);

// root.right = new Node(1)
// root.right.right = new Node(1);


const root = new Node(2);
root.left = new Node(2);
root.left.left = new Node(5);
root.left.right = new Node(2);

root.right = new Node(2)

function univaluedBinaryTree(node)
{
    if(node.left==null && node.right == null)
    {
        return 1;
    }
    if (node.left != null && node.right == null){
        if (node.left.val != node.val) return 0;
        return univaluedBinaryTree(node.left);
    }

    if (node.right != null && node.left == null)
    {
        if(node.right.val != node.val) return 0;
        return univaluedBinaryTree(node.right);
    }


    if (node.right != null && node.left != null)
    {
        if(node.right.val != node.val || node.left.val != node.val) return 0;
        return Math.min(univaluedBinaryTree(node.right), univaluedBinaryTree(node.left));
    }
}

console.log(univaluedBinaryTree(root));