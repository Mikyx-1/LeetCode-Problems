# 884: Uncommon words from 2 sentences
# Tested successfully

s1 = "this apple is sweet"
s2 = "this apple is sour"

# s1 = "apple apple"
# s2 = "banana"

def findIdx(list, item):
    for ith, l in enumerate(list):
        if l == item:
            return ith
    return -1

def findUncommonWords(string1, string2):
    list1 = string1.split(" ")
    list2 = string2.split(" ")
    dict1 = {}
    dict2 = {}
    result = []
    for l1 in list1:
        if l1 not in dict1:
            dict1[l1] = 1
        else:
            dict1[l1] += 1
    for l2 in list2:
        if l2 not in dict2:
            dict2[l2] = 1
        else:
            dict[l2] += 1
    
    for key in dict1.keys():
        if dict1[key] == 1 and key not in dict2:
            result.append(key)
        
    for key in dict2.keys():
        if dict2[key] == 1 and key not in dict1:
            result.append(key)
    

    return result

print(findUncommonWords(s1, s2))