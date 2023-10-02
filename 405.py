# 405: Convert a Number to Hexadecimal
# Tested successfully

num1 = 126
num2 = -1

dict = "0123456789abcdef"

def convert(num, res):
    if num//16 == 0:
        return dict[num%16] + res
    
    res += dict[num%16]
    return convert(num//16, res)

def toHex(num):
    if num >= 0:
        return convert(num, "")
    
    if num < 0:

        hex = list(convert(-(num + 1), ""))
        for i in range(len(hex)):
            hex[i] = dict[15 - dict.index(hex[i])]
        prefix = ['f']*(8-len(hex))
        result = prefix + hex
        result = "".join(result)
        return result

    

print(toHex(90))