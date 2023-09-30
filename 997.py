# 997: Find the Town Judge

# Algo:
# Step 1: Find the person that does not trust anyone 

n1 = 2; trust1 = [[1, 2]]
n2 = 3; trust2 = [[1, 3], [2, 3]]
n3 = 3; trust3 = [[1, 3], [2, 3], [3, 1]]

def findTheTownJudge(n, trust):
    trusters = [trust[0][0]]
    trustedPerson = trust[0][1]
    
    for i in range(1, len(trust)):
        trusters.append(trust[i][0])
        if trust[i][1] != trustedPerson:
            return -1
    
    if(len(trusters) != n-1):
        return -1
    
    return trustedPerson


print(findTheTownJudge(n1, trust1))
print(findTheTownJudge(n2, trust2))
print(findTheTownJudge(n3, trust3))