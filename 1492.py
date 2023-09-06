# 1492: The kth Factor of n
# Tested Successfully
# Time Complexity: O(n/2)

num1 = 21
num2 = 42


def kthFactor(n, k):
    factors = []
    
    for i in range(1, n//2 + 1):
        if n % i == 0:
            factors.append(i)
            # Check if the symmetric factor is different
            if i != n // i:
                factors.append(n // i)
            
    
    if k <= len(factors):
        return factors[k - 1]
    else:
        return -1

print(kthFactor(num1, 2))
print(kthFactor(num2, 3))