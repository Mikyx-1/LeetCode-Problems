# 646: Maximum Length of Pair Chain
# Tested Successfully


pairs1 = [[1, 2], [2, 3], [3, 4]]    # Output: 2
pairs2 = [[1, 2], [7, 8], [4, 5]]    # Output: 3
pairs3 = [[1, 3], [9, 15], [6, 8], [5, 7], [4, 6]]

def findMax(pairs):
    sorted_pairs = sorted(pairs, key=lambda x: x[0])
    i = 1
    while i < len(sorted_pairs):

        if(sorted_pairs[i][0] <= sorted_pairs[i-1][1]):
            del sorted_pairs[i]
        else:
            i += 1 

    return len(sorted_pairs)


print(findMax(pairs3))



