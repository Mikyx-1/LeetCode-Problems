// 112. Path Sum
// Tested successfully

class TreeNode
{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const root = new TreeNode(5);

// root.left = new TreeNode(4);
// root.left.left = new TreeNode(11);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(2);

// root.right = new TreeNode(8);
// root.right.left = new TreeNode(13);
// root.right.right = new TreeNode(4);
// root.right.right.right = new TreeNode(1);

// let target = 22;

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
let target = 5;


function pathSum(root, target)
{
    let result = false;
    function hasSum(node, path)
    {
        if(node.left == null && node.right == null)
        {   let sum = path.reduce((a, b) => {return a + b;});
            if( sum == target) result = true;
            return;
        }

        if(node.left != null)
        {
            path.push(node.left.val);
            hasSum(node.left, path);
            path.pop();
        }

        if(node.right != null)
        {
            path.push(node.right.val);
            hasSum(node.right, path);
            path.pop()
        }
    }

    hasSum(root, [root.val]);
    return result;
}

console.log(pathSum(root, target));