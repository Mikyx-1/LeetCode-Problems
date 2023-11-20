// 2236. Root Equals Sum of Children
// Tested successfully

class TreeNode{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const root = new TreeNode(10);
// root.left = new TreeNode(4);
// root.right = new TreeNode(6);

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(1);

let checkRootEquals = (root) => {
    if(root.left.val + root.right.val == root.val) return true;
    return false;
}

console.log(checkRootEquals(root));