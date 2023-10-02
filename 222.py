# 222: Count complete tree nodes
# Tested successfully

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


root = TreeNode(1)
root.left = TreeNode(2)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

root.right = TreeNode(3)
root.right.left = TreeNode(6)
# root.right.right = TreeNode(7)

root1 = TreeNode(1)

def countCompleteTreeNodes(node):
    def count(node, numNodes):
        if node is None:
            return numNodes
        
        if node.left != None:
            numNodes = count(node.left, numNodes + 1)
        
        if node.right != None:
            numNodes = count(node.right, numNodes + 1)

        return numNodes

    return count(node, 1)
print(countCompleteTreeNodes(root))
print(countCompleteTreeNodes(root1))
    


