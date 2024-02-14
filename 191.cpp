// 191. Number of 1 Bits
// Tested successfully

#include <iostream>

int CountBit1(unsigned int n)
{
    int numBits = sizeof(n)*8;
    int num_bit_1s = 0;

    for (int i = 0; i < numBits; i++)
    {
        if(n%2==1) num_bit_1s++;
        n = n >> 1;
    }
    
    return num_bit_1s;
}

int main()
{
    unsigned int n1 = 0b00000000000000000000000000001011;
    unsigned int n2 = 0b00000000000000000000000010000000;

    int n1_1_bits = CountBit1(n1);
    int n2_1_bits = CountBit1(n2);

    std::cout << n1_1_bits << std::endl;
    std::cout << n2_1_bits << std::endl;

    return 1;
}