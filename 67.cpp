// 67. Add Binary
// Tested successfully

#include <iostream>

std::string add_binary(std::string binary1, std::string binary2)
{
    int length1 = binary1.size(), length2 = binary2.size();
    if(length1 < length2)
    {
        for (int i = 0; i < length2 - length1; i++) binary1.insert(0, "0");
        length1 = length2;
    }
    else{
        for (int i = 0; i < length1 - length2; i++) binary2.insert(0, "0");
        length2 = length1;
    }

    bool cache = false;
    std::string result = "";
    for (int i = length1-1; i > -1; i--)
    {
        if(binary1[i] == '1' && binary2[i] == '1')
        {   
            if(cache==true)
            {
            result.insert(result.begin(), '1');
            }
            else
            {
                cache = true;
                result.insert(result.begin(), '0');
            } 
        }
        else if ((binary1[i] == '1' && binary2[i] == '0') || (binary1[i] == '0' && binary2[i] == '1'))
        {
            if(cache == true)
            {
                result.insert(result.begin(), '0');
            }
            else{
                result.insert(result.begin(), '1');
            }
        }

        else if (binary1[i] == '0' && binary2[i] == '0')
        {
            if(cache==true){
                result.insert(result.begin(), '1');
                cache = false;
            } 
            else result.insert(result.begin(), '0');
        }
    }

    if(cache==true) result.insert(result.begin(), '1');
    return result;
}

void print_binary(std::string binary)
{
    int length = binary.size();
    for (int i = 0; i < length; i++)
    {
        std::cout << binary[i] << " ";
    }
    std::cout << std::endl;
}


int main()
{
    std::string a1 = "11", b1 = "1", a2 = "1010", b2 = "1011";

    print_binary(add_binary(a1, b1));
    print_binary(add_binary(a2, b2));
    return 1;

}