# 700: Search in a Binary Search Tree
# Tested successfully

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


root = TreeNode(4)
root.left = TreeNode(2)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)

root.right = TreeNode(7)

def searchInABST(node, target):
    if (node == None):
        return []
    if(node.val == target):
        return [node.val, node.left.val, node.right.val]
    
    if (target < node.val):
        return searchInABST(node.left, target)
    
    if (target >= node.val):
        return searchInABST(node.right, target)
    
print(searchInABST(root, 5))