// 66. Plus One
// Tested successfully

#include <iostream>
#include <vector>

std::vector<int> plus_one(std::vector<int> digits)
{
    digits.insert(digits.begin(), 0);
    int last_idx = digits.size() - 1;
    bool cache = false;
    if(digits[last_idx] + 1 == 10)
    {
        cache = true;
        digits[last_idx] = 0;
    }
    else{
        digits[last_idx]++;
    }

    for (int i = last_idx-1; i > -1; i--)
    {
        if(cache==false) break;

        else {
            if(digits[i] + 1 == 10){
                digits[i] = 0;
            }
            else{
                digits[i] += 1;
                cache = false;
            }
        }
    }

    if(digits[0] == 0) digits.erase(digits.begin());
    return digits;
}

void print_digits(std::vector<int> digits)
{
    int length = digits.size();
    for (int i = 0; i < length; i++)
    {
        std::cout << digits[i] << " ";
    }
    std::cout << std::endl;
}

int main()
{
    std::vector<int> digits1 = {1, 2, 3}, digits2 = {4, 3, 2, 1}, digits3 = {9};

    std::vector<int> added_one_1 = plus_one(digits1), added_one_2 = plus_one(digits2), added_one_3 = plus_one(digits3);


    print_digits(added_one_1);
    print_digits(added_one_2);
    print_digits(added_one_3);

    return 1;


}