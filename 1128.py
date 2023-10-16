# 1128: Number of Equipvalent Domino pairs
# Tested successfully

dominoes1 = [[1,2],[2,1],[3,4],[5,6]]
dominoes2 = [[1,2],[1,2],[1,1],[1,2],[2,2]]


def checkEquipvalentDominoes(domino1, domino2):
    if domino1[0]*domino1[1] == domino2[0]*domino2[1]:
        return True
    return False
    
def countEquipvalentPairs(dominoes):
    countList = {dominoes[0][0]*dominoes[0][1]: [0, "first"]}

    
    for i in range(1, len(dominoes)):
        if dominoes[i][0]*dominoes[i][1] in countList:
            if countList[dominoes[i][0]*dominoes[i][1]][1] == "first":
                countList[dominoes[i][0]*dominoes[i][1]][1] == "nonFirst"
                countList[dominoes[i][0]*dominoes[i][1]][0] += 2
            else:
                countList[dominoes[i][0]*dominoes[i][1]][0] += 1

        else:
            countList[dominoes[i][0]*dominoes[i][1]] =  [0, "first"]

    ans = 0
    for value in countList.values():
        ans = ans + value[0] - 1  if value[0] > 0 else ans + 0  
    return ans

print(countEquipvalentPairs(dominoes1))
print(countEquipvalentPairs(dominoes2))