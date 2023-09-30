// 108: Convert Sorted Array to Binary Search Tree
// Tested successfully

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [-10, -3, 0, 5, 9];

class TreeNode
{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function convertSortedArr2BST(arr)
{
    let middleIdx = Math.floor(arr.length/2);
    let root = new TreeNode(arr[middleIdx]);
    
    function convert(node, arr)
    {
        if(arr.length == 0) return null;


        let middleIdx = Math.floor(arr.length/2);

        let newNode = new TreeNode(arr[middleIdx]);

        if(newNode.val < node.val) node.left = newNode;
        else node.right = newNode;

        convert(newNode, arr.slice(0, middleIdx));
        convert(newNode, arr.slice(middleIdx +1, )); 
    }

    convert(root, arr.slice(0, middleIdx));
    convert(root, arr.slice(middleIdx+1, ));

    return root;

}

console.log(convertSortedArr2BST(arr1));