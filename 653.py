# 653: Two Sum IV: Input is a BST
# Tested successfully

def twoSum(nums, target):
    length = len(nums)
    for i in range(length):
        for j in range(i+1, length):
            if nums[i] + nums[j] == target:
                return True
            
    return False

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

root = TreeNode(5)
root.left = TreeNode(3)
root.left.left = TreeNode(2)
root.left.right = TreeNode(4)

root.right = TreeNode(6)
root.right.right = TreeNode(7)
k = 28

def twoSumIV(root, target):
    arr = []
    def traverse(node):
        nonlocal arr
        if node.left == None and node.right == None:
            arr.append(node.val)
            return
        
        arr.append(node.val)
        if node.left != None and node.right == None:
            traverse(node.left)

        if node.left == None and node.right != None:
            traverse(node.right)

        if node.left != None and node.right != None:
            traverse(node.right)
            traverse(node.left)

    traverse(root)
    return twoSum(arr, target)

print(twoSumIV(root, k)) 