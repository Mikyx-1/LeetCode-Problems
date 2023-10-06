# 693: Binary Number with Alternating Bits
# Tested successfully

n1 = 5
n2 = 7
n3 = 11


# def isAlternatingBits(n, res=""):
    
#     if n//2 == 0:
#         if str(n%2) != res
#     return

def toBin(n, res=""):
    if n//2 == 0:
        res = str(n%2) + res
        if len(res) >=2 and res[0] == res[1]:
            return False
        return True
    
    res = str(n%2) + res

    if len(res) >= 2 and res[0] == res[1]:
        return False 
    return toBin(n//2, res)
    
print(toBin(n1))
print(toBin(n2))
print(toBin(n3))