
# Write a program to find the sum of digits of a number using recursion

def reverseString(string):
    if len(string) == 1:
        return string[0]
    
    return string[-1] + reverseString(string[:-1])



string = "w3resource"

print(reverseString(string))