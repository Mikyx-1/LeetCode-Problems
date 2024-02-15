// 35. Search Insert Position
// Tested successfully

#include <iostream>
#include <vector>

int search_insert_position(std::vector<int> nums, int target)
{
    int length = nums.size();
    int pos = 0;
    if (nums[0] > target) return 0;
    for (int i = 0; i < length-1; i++)
    {
        if (nums[i] == target) pos = i;

        if (nums[i+1] == target) pos =  i+1;

        if(nums[i] < target && nums[i+1] > target) pos =  i+1;
    }

    if (pos != 0) return pos;
    return length;
}


int main()
{
    std::vector<int> nums = {1, 3, 5, 6};
    int target1 = 5, target2 = 2, target3 = 7;

    std::cout << search_insert_position(nums, target1) << std::endl;
    std::cout << search_insert_position(nums, target2) << std::endl;
    std::cout << search_insert_position(nums, target3) << std::endl;

    return 1;
}