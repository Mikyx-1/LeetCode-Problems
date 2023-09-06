# 15. 3 Sum
# Tested successfully

nums1 = [-1, 0, 1, 2, -1, -4, -6, 6, 2, 4, 3, 5, 6]
nums2 = [0, 1, 1]
nums3 = [0, 0, 0]


def twoSum(arr, target):
    res = []
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] + arr[j] == target:
                res += [[arr[i], arr[j]]]

    return res


def threeSum(arr, target):
    res = []
    for i in range(len(arr)):

        sub_target = target - arr[i]
        sub_res = twoSum(arr[:i] + arr[i+1:], sub_target)
        if(len(sub_res) > 0):
            for s in sub_res:
                if arr[i] != s[0] != s[1]:
                    s = sorted([arr[i]] + s)
                    if s not in res:
                        res.append(s)
        
            
    return res

print(threeSum(nums1, 0))