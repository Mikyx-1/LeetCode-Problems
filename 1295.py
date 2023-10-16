# 1295: Find numbers with even number of digits

nums1 = [12, 345, 2, 6, 7896]
nums2 = [555, 901, 482, 1771]

def countDigits(num):
    cnt = 0
    while num != 0:
        num = num//10
        cnt +=1
    return cnt

def findNumbersWithEvenDigits(nums):
    cnt = 0
    for num in nums:
        if countDigits(num)%2 == 0:
            cnt+=1
    return cnt

print(findNumbersWithEvenDigits(nums1))
print(findNumbersWithEvenDigits(nums2))