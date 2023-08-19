#include <stdio.h>
#include <stdbool.h>

bool searchMatrix(int **matrix, int matrixSize, int *matrixColSize, int target)
{
    int Hmid, vMid;
    int top = 0;
    int bottom = matrixColSize[0] - 1;

    int l = 0;
    int r = matrixSize - 1;

    int currAI;
    while (top <= bottom)
    {
        Hmid = top + (bottom - top) / 2;
        if (target > matrix[Hmid][0] && top != Hmid)
        {
            top = Hmid;
        }
        else if (target < matrix[Hmid][0] && top != Hmid)
        {
            bottom = Hmid - 1;
        }
        else
        {
            while (l <= r)
            {
                vMid = l + (r - l) / 2;

                if (matrix[Hmid][vMid] == target)
                {
                    return true;
                }
                else if (matrix[Hmid][vMid] < target)
                {
                    l = vMid;
                }
                else
                {
                    r = vMid - 1;
                }
            }
        }
    }

    return false;
}
int main()
{
    int *arr[] = {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}};

    searchMatrix()
}
