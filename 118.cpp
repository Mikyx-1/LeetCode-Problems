// 118. Pascal's Triangle
// Tested successfully
#include<iostream>
#include <vector>


std::vector<std::vector<int>> ReturnPascalTriangle(int numRows)
{
    std::vector<std::vector<int>> PascalTriangle = {{1}};
    if (numRows == 1) return PascalTriangle;

    std::vector<int> second_row = {1, 1};
    PascalTriangle.push_back(second_row);
    if (numRows == 2) {

        return PascalTriangle;
    }

    int num_unfilled_triangles = 1;

    for (int i = 3; i <= numRows; i++)
    {
        std::vector<int> row = {1};
        for (int j = 0; j < num_unfilled_triangles; j++)
        {
            row.push_back(PascalTriangle[i-2][j] + PascalTriangle[i-2][j+1]);
        }
        row.push_back(1);
        PascalTriangle.push_back(row);
        num_unfilled_triangles++;
    }

    return PascalTriangle;
}

void printPascalTriangle(std::vector<std::vector<int>> PascalTriangle)
{
    int length = PascalTriangle.size();
    int num_holes = 1;

    for (int i = 0; i < length; i++)
    {
        for (int j = 0; j < num_holes; j++)
        {
            std::cout << PascalTriangle[i][j] << " ";
        }
        num_holes++;
        std::cout << std::endl;
    }
}


int main()
{
    int numRows1=5, numRows2 = 1;

    std::vector<std::vector<int>> PascalTriangle = ReturnPascalTriangle(numRows1);

    printPascalTriangle(PascalTriangle);

    return 1;
}