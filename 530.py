# 530: Minimum Absolute Difference in BST
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

root.right = TreeNode(6)

def minimumAbsoluteDifference(root):
    visitedValues = [root.val]
    globalMinDistance = min(abs(root.val - root.right.val), abs(root.val - root.left.val))

    def traverse(node):
        nonlocal visitedValues, globalMinDistance
        if(node.left == None and node.right == None):
            localMinDist = calculateMinDistance(node.val)
            if localMinDist < globalMinDistance:
                globalMinDistance = localMinDist
            
            visitedValues.append(node.val)
            return
        
        localMinDist = calculateMinDistance(node.val)
        if localMinDist < globalMinDistance:
            globalMinDistance = localMinDist

        visitedValues.append(node.val)

        if(node.left != None and node.right != None):
            traverse(node.left)
            traverse(node.right)

        if(node.left != None and node.right == None):
            traverse(node.left)

        if(node.left == None and node.right != None):
            traverse(node.right)



    def calculateMinDistance(nodeVal):
        nonlocal visitedValues
        localMinValue = abs(nodeVal - visitedValues[0])
        for visitedValue in visitedValues:
            if abs(nodeVal - visitedValue) < localMinValue:
                localMinValue = abs(nodeVal - visitedValue)
        return localMinValue
    
    traverse(root.left)
    traverse(root.right)
    return globalMinDistance


print(minimumAbsoluteDifference(root))