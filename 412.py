# 412: Fizz Buzz
# Tested successfully


n1 = 3
n2 = 5
n3 = 15

def fizzBuzz(n):
    result = []
    for i in range(1, n+1):
        if(i%15==0):
            result.append("FizzBuzz")

        elif(i%3==0):
            result.append("Fizz")

        elif(i%5==0):
            result.append("Buzz")

        else:
            result.append(str(i))

    return result


print(fizzBuzz(n1))
print(fizzBuzz(n2))
print(fizzBuzz(n3))