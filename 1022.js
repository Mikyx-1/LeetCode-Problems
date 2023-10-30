// 1022. Sum of Root to Leaf Binary
// Tested successfully

class TreeNode{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);

root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);


function toDec(bin)
{   let length = bin.length;
    let sum = 0;
    for (let i = 0; i<length; i++)
    {
        sum += bin[i]*Math.pow(2, length-1-i);
    }
    return sum;
}


function sumOfRoot2LeafBinaryNumbers(root)
{
    let paths = [];
    function dfs(node, path)
    {

        if (node==null) return;
        path.push(node.val);
        if (node.left == null && node.right == null)
        {   
            paths.push(path.slice());
            
        }

        else{
            dfs(node.left, path);
            dfs(node.right, path);
        }
        path.pop();        
    }

    dfs(root, []);

    let sum = 0;
    for (path of paths)
    {
        sum += toDec(path.join(""));
    }

    return sum;
}

console.log(sumOfRoot2LeafBinaryNumbers(root));