// 111. Minimum depth of Binary Tree
// Tested Successfully

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

const root = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);
root.right.right.right.right = new TreeNode(6);



function minimumDepthOfBinaryTree(TreeNode)
{
    let minLength = Infinity;

    function traverse(TreeNode, currentLength)
    {
        if(TreeNode.left == null && TreeNode.right == null)
        {
            if(currentLength < minLength) minLength = currentLength;
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

    traverse(TreeNode, 1);
    return minLength;
}

console.log(minimumDepthOfBinaryTree(root));

