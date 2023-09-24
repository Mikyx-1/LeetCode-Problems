
# Write a program to find the sum of digits of a number using recursion

list1 = [-1, 2, 3, 4, -1278, 9, 11, 15]

def maxList(list_):
    maxValue = list_[0]

    def maxList1(list_):
        nonlocal maxValue
        if len(list_) == 1:
            if list_[0] > maxValue:
                maxValue = list_[0]
                return 

        if list_[0] > maxValue:
            maxValue = list_[0]
        return maxList1(list_[1:])
        
    maxList1(list_)
    return maxValue

print(maxList(list1))