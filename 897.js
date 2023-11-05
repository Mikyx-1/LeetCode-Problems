// 897. Increasing Order Search Tree
// Tested successfully
// High time complexity

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

root.right = new TreeNode(6);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(9);

function convertBST(root)
{
    let arr = [];
    let stack = [root];
    while(stack.length > 0)
    {
        let currentNode = stack.pop()
        arr.push(currentNode);
        if(currentNode.left != null) stack.push(currentNode.left);

        if(currentNode.right != null) stack.push(currentNode.right);
    }

    arr.sort((a, b) => a.val - b.val);
    for (let i = 0; i < arr.length - 1; i++)
    {
        arr[i].right = arr[i+1];
        arr[i].left = null;
    }
    return arr[0];
}

console.log(convertBST(root));
// console.log(newRoot);

