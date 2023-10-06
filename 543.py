# 543: Diameter of Binary Tree
# Tested successfully

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

root = TreeNode(1)
root.left = TreeNode(2)
# root.left.left = TreeNode(4)
# root.left.right = TreeNode(5)

# root.right = TreeNode(3)


def diameterOfBinaryTree(root):
    maxLeftLength = 0
    maxRightLength = 0
    
    def traverseLeft(node, currentLength):
        nonlocal maxLeftLength
        if node.left == None and node.right == None:
            currentLength +=1 
            if currentLength > maxLeftLength:
                maxLeftLength = currentLength
            return
        
        currentLength += 1
        if node.left != None and node.right == None:
            traverseLeft(node.left, currentLength)

        elif node.left == None and node.right != None:
            traverseLeft(node.right, currentLength)

        else: 
            traverseLeft(node.left, currentLength)
            traverseLeft(node.right, currentLength)

    
    def traverseRight(node, currentLength):
        nonlocal maxRightLength
        if node.left == None and node.right == None:
            currentLength +=1 
            if currentLength > maxRightLength:
                maxRightLength = currentLength
            return
        
        currentLength += 1
        if node.left != None and node.right == None:
            traverseRight(node.left, currentLength)

        elif node.left == None and node.right != None:
            traverseRight(node.right, currentLength)

        else: 
            traverseRight(node.left, currentLength)
            traverseRight(node.right, currentLength)

    if (root.left != None):
        traverseLeft(root.left, 0)
    if (root.right != None):
        traverseRight(root.right, 0)
    return maxLeftLength + maxRightLength

print(diameterOfBinaryTree(root))