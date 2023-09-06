# 20. Valid Parentheses
# Tested successfully
string1 = '()'
string2 = "()[]{}"
string3 = "(]"
string4 = "([(((((())))))]){()[]}"
string5 = "([(((((())))))]){()[}"


def valid_parenthesis(string):
    test_string = ''
    for item in string:
        test_string += item
        if(len(test_string) > 1):
            if(test_string[-2:]=="()" or test_string[-2:] == "{}" or test_string[-2:] == "[]"):
                test_string =  test_string[:-2]

    if len(test_string)==0:
        return True
        
    return False

print(valid_parenthesis(string4))

