# 69. Sqrt
# Tested successfully
def pow(x, n):
    if n == 1: return x

    else: return x*pow(x, n-1)



def sqrt(num):

    if num < 0: return False

    elif num == 1 or num==2 or num==3: return 1

    for i in range(num-1):

        if pow(i, 2) == num:
            return i

        elif pow(i, 2) < num and pow(i+1, 2) > num:
            return i
        

print(sqrt(96))