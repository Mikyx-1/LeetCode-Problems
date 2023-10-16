# 1103: Distribute candies to people
# Tested successfully

candies1 = 7
num_people1 = 4

candies2 = 10
num_people2 = 3


def distributeCandies(candies, num_people):
    candiesArr = [0]*num_people

    idx = 0
    candiesPerTurn = 1
    while(candies > 0):
        candiesArr[idx] +=  candiesPerTurn
        candiesPerTurn += 1
        idx = idx+ 1 if idx+1 < len(candiesArr) else 0
        if candies - candiesPerTurn < 0:
            
            candiesArr[idx] += candies - 1
            break
        else:
            candies -= candiesPerTurn
           

        
    return candiesArr

print(distributeCandies(candies1, num_people1))
print(distributeCandies(candies2, num_people2))