# 1137: N-th Tribonacci Number
# Tested successfully

n1 = 4
n2 = 25


def fibMem(n, cache={0:0, 1:1, 2:1}):
    if n in cache:
        return cache[n]
    
    cache[n] = fibMem(n-1, cache) + fibMem(n-2, cache) + fibMem(n-3, cache)
    return cache[n]

print(fibMem(n1))
print(fibMem(n2))
print(fibMem(40))