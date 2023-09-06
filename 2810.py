# 2810: Faulty Keyboard
# Tested successfully


s1 = "string" # Output: rtsng
s2 = 'ipoiiinteri'



def faultyKeyboard(string):
    idx = 0
    while idx < len(string):
        if string[idx] == 'i':
            
            string = string[:idx][::-1] + string[idx+1:]
        else:
            
            idx += 1
    return string

print(faultyKeyboard(s2))
