# 14. Longest Common Prefix
# Tested succesfully

list1 = ["flower", "flow", "flight"]
list2 = ["dog", "racecar", "car"]



def checkExistence(string, item):
    item_length = len(item)
    if string[:item_length] != item:
        return False
    
    return True




def longestCommonPrefix(list_):

    prefix = ''
    tail = 0
    while True:
        for i in range(len(list_)):
            if checkExistence(list_[i], prefix) == False:
                return prefix[:-1]
            
        tail += 1
        prefix = list_[0][:tail]

print(longestCommonPrefix(list2))
    

