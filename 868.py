# 868: Binary Gap
# Tested successfully


def toBin(num, res=""):
    if num//2 == 0:
        return str(num%2) + res
    
    res = str(num%2) + res
    return toBin(num//2, res)

def BinaryGap(n):
    bin = toBin(n)
    maxDist = 0
    for i in range(len(bin)-1):
        for j in range(i+1, len(bin)):

            if bin[i] == "1" and bin[j] == "1":
                if j - i > maxDist:
                    maxDist = j-i
                i = j
        
    return maxDist

print(BinaryGap(22))
print(BinaryGap(8))
print(BinaryGap(5))
print(BinaryGap(9)) # 1001