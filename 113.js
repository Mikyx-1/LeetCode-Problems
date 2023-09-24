// 113: Path Sum II
// Tested successfully

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

let tree1 = new TreeNode(5)

tree1.left = new TreeNode(4); 
tree1.right = new TreeNode(8);

tree1.left.left = new TreeNode(11);
tree1.left.left.left = new TreeNode(7);
tree1.left.left.right = new TreeNode(2);

tree1.right.left = new TreeNode(13);
tree1.right.right = new TreeNode(4);
tree1.right.right.left = new TreeNode(5);
tree1.right.right.right = new TreeNode(1);


function extractPaths(root)
{
    const results = [];

    function traverse(node, currentPath)
    {
        if(node==null || node == undefined) return;

        currentPath.push(node.val);
        if(node.left == null && node.right == null){
            results.push(currentPath.slice())
        }

        else{
            traverse(node.left, currentPath);
            traverse(node.right, currentPath);
        }
        currentPath.pop()
    }
    traverse(root, []);

    return results;
}



function pathSumII(rootNode, target)
{
    let paths = extractPaths(rootNode);
    let results = [];
    for (path of paths)
    {
        if(path.reduce((a, b) => {return  a+b}, 0) == target)
        {
            results.push(path)
        }
    }

    return results;
}

console.log(pathSumII(tree1, 22));

