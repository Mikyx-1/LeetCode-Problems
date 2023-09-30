// Balanced Binary Tree
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

// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(3);

root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(4);


function determineTraverseLength(TreeNode)
{
    let maxLength = 0;

    function traverse(TreeNode, currentLength)
    {
        if(TreeNode.left == null && TreeNode.right == null)
        {
            if(currentLength > maxLength) maxLength = currentLength;
            return ;
        }
        
            if(TreeNode.left != null) {
                currentLength++;
                traverse(TreeNode.left, currentLength)
                currentLength--;
            }


            if(TreeNode.right != null)
            {
                currentLength++;
                traverse(TreeNode.right, currentLength);
                currentLength--;
            }

        
    }

    traverse(TreeNode, 0);
    return maxLength;
}


function checkBalancedBinaryTree(root)
{
    if(root.left == null && root.right == null) return true;

    let left_branch_length = 0, right_branch_length = 0;
    if(root.left != null)
    {
        left_branch_length = determineTraverseLength(root.left);
    }
    if (root.right != null)
    {
        right_branch_length = determineTraverseLength(root.right);
    }

    if(Math.abs(left_branch_length - right_branch_length) < 2) return true;
    return false;
}

console.log(checkBalancedBinaryTree(root));