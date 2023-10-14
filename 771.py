# 771: Jewels and Stones
# Tested successfully

jewels1 = "aA"
stones1 = "aAAbbbb"

jewels2 = "z"
stones2 = "ZZ"

def jewelsAndStones(jewels, stones):
    cnt=0
    for jewel in jewels:
        for stone in stones:
            if stone == jewel:
                cnt+=1
    return cnt

print(jewelsAndStones(jewels1, stones1))
print(jewelsAndStones(jewels2, stones2))