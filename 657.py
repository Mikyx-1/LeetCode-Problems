# 657: Robot Return to Origin
# Tested successfully

moves1 = "UD"
moves2 = "LL"
moves3 = "UDLLLRRRDDDDUUUU"

def isBack2Origin(moves):
    horizontalCnt = 0
    verticalCnt = 0
    for m in moves:
        if m == "U":
            verticalCnt+=1
        elif m == "D":
            verticalCnt -=1
        
        elif m == "L":
            horizontalCnt -= 1
        elif m == "R":
            horizontalCnt +=1

    if horizontalCnt == 0 and verticalCnt == 0:
        return True
    return False

print(isBack2Origin(moves1))
print(isBack2Origin(moves2))
print(isBack2Origin(moves3))