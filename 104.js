// 104. Maximum Depth of Binary Tree
// Tested successfully

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

a = new TreeNode(3)

a.left = new TreeNode(9)
a.right = new TreeNode(20)

a.right.left = new TreeNode(15)
a.right.right = new TreeNode(7)



function height(root){
    if (root === null || root === undefined){
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}
