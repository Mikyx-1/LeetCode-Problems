# Ugly number
# Tested successfully

def checkPrime(num):
    if num > 1 and num < 4: return True
    if num == 1: return False

    for i in range(2, num//2):
        if num%i == 0:
            return False
    return True


def checkUgly(num):
    list_ = []
    divisor = 2
    while num>1:
        if num%divisor==0 and checkPrime(divisor):
            num /= divisor
            list_.append(divisor)

        else:
            divisor += 1

    ugly_nums = [2, 3, 5]
    for ith, l in enumerate(list_):
        if l != ugly_nums[ith]:
            return False
    return True

print(checkUgly(1))