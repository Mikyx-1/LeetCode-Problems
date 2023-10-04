# 2748: Number of Beautiful Pairs
# Tested successfully

nums1 = [2, 5, 1, 4]
nums2 = [11, 21, 12]

def gcd(x, y):
    upperBound = min(x, y)

    for  i in range(2, upperBound+1):
        if (x%i==0 and y%i == 0):
            return False
    return True

def numberOfBeautifulPairs(nums):
    cnt = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if gcd(nums[i], nums[j]):
                cnt+=1

    return cnt

print(numberOfBeautifulPairs(nums1))
print(numberOfBeautifulPairs(nums2))
