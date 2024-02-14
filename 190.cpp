// Tested successfully
#include <iostream>

unsigned int reverseBit(unsigned int n)
{
    unsigned int result = 0;

    for (int i = 31; i >= 0; i--)
    {
        result += (n % 2)<<i;
        n = n>>1;
    }

    return result;
}

int main()
{
    unsigned int n1 = 0b00000010100101000001111010011100;
    unsigned int n2 = 0b11111111111111111111111111111101;

    unsigned int res = reverseBit(n2);

    std::cout << res << std::endl;

    return 0;
}