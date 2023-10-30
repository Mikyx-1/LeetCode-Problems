// 783. Minimum Distance Between BST Nodes
// Tested successfully

class TreeNode{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);

// root.right = new TreeNode(6);

const root = new TreeNode (1);
root.left = new TreeNode(0);

root.right = new TreeNode(48);
root.right.left = new TreeNode(12);

root.right.right = new TreeNode(49);


function minimumDistBetweenBSTNodes(root)
{
    let minVal = Infinity;
    function dfs(node)
    {
       if (node == null) return ;
    
       if (node.left != null)
        {
            if(Math.abs(node.left.val - node.val) < minVal) minVal = Math.abs(node.left.val - node.val);
        }

        if(node.right != null ){
            if(Math.abs(node.right.val - node.val) < minVal) minVal = Math.abs(node.right.val - node.val);
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return minVal;
}

console.log(minimumDistBetweenBSTNodes(root));