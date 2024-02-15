// 58. Length of Last Word
// Tested successfully

#include <iostream>


int length_of_last_word(std::string string)
{
    int last_idx = string.size()-1;

    int cnt = 0;
    for (int i = last_idx; i > 0; i--)
    {
        if (string[i] != ' ' && string[i-1] != ' ') cnt++;

        else if (string[i] != ' ' && string[i-1] == ' ') return cnt+1;
    }

    return cnt;
}

int main()
{
    std::string s1 = "Hello World", s2 = "   fly me   to   the moon  ", s3 = "luffy is still joyboy";

    std::cout << length_of_last_word(s1) << std::endl;
    std::cout << length_of_last_word(s2) << std::endl;
    std::cout << length_of_last_word(s3) << std::endl;

    return 1;
}