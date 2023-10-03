# 671: Second Minimum Node in a binary tree
# Tested successfully

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


root = TreeNode(2)
root.left = TreeNode(2)

root.right = TreeNode(5)
root.right.left = TreeNode(5)
root.right.right = TreeNode(7)
# root.right = TreeNode(2)



def secondMinimumNode(root):
    min1 = root.val
    min2 = root.left.val if root.left is not None else root.right.val

    def traverse(node):
        nonlocal min1, min2
        if(node.left == None and node.right == None):
            if(node.val < min1):
                min2 = min1
                min1 = node.val

            if(node.val > min1 and node.val < min2):
                min2 = node.val
            if(node.val > min2 and min2==min1):
                min2 = node.val
            return


        if(node.val < min1):
            min2 = min1
            min1 = node.val

        if(node.val > min1 and node.val < min2):
            min2 = node.val

        if(node.val > min2 and min2==min1):
            min2 = node.val

        if(node.left != None and node.right==None):
            traverse(node.left)
        
        if(node.left == None and node.right != None):
            traverse(node.right)

        if(node.left != None and node.right != None):
            traverse(node.left)
            traverse(node.right)

    traverse(root)
    if(min1==min2): return -1

    return min2

print(secondMinimumNode(root))