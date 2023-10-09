# 744: Find the smallest letter greater than target
# Tested successfully

# Consume to much time and space

letters1 = ["c", "f", "j"]
target1 = "a"

letters2 = ["c", "f", "j"]
target2 = "c"

letters3 = ["x", "x", "y", "y"]
target3 = "z"

def smallestLetterGreaterThanTarget(letters, target):
    
    resultArr = []
    for letter in letters:
        resultArr.append(ord(letter) - ord(target))

    resultVal = float("inf")
    minPos = 0
    for i in range(len(resultArr)):
        if resultArr[i] > 0 and resultArr[i] < resultVal:
            resultVal = resultArr[i]  
            minPos = i

    return letters[minPos]

print(smallestLetterGreaterThanTarget(letters1, target1))
print(smallestLetterGreaterThanTarget(letters2, target2))
print(smallestLetterGreaterThanTarget(letters3, target3))