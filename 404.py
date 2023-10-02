# 404: Sum of left Leaves
# Tested successfully

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)

root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

def sumOfLeftLeaves(node, position, sum):
    if(node.left == None and node.right == None):
        if(position == "left"):
            sum = sum + node.val

        return sum
    
    if(node.left != None and node.right == None):
        return sumOfLeftLeaves(node.left, "left", sum)

    elif (node.right != None and node.left == None):
        return sumOfLeftLeaves(node.right, "right", sum)

    else:
        return sumOfLeftLeaves(node.left, "left", sum) + sumOfLeftLeaves(node.right, "right", sum)


print(sumOfLeftLeaves(root, "middle", 0))


