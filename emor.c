#include <stdio.h>

// char *intToRoman(int num)
// {

//     // 1398 =1000 + 300 + 90 + 5 + 3
//     //  1000 = M
//     //  500 = D
//     //  100 = C
//     //  50 = L
//     //  10 = X
//     //  5 = V
//     //  1 = I
//     //  MCCCIC
//     int thousand, hundred, tens, once;

//     thousand = (int)num / 1000;
//     hundred = (int)(num % 1000) / 100;
//     tens = (int)(num % 100) / 10;
//     once = (int)(num % 10) / 1;

//     printf('%d', thousand);
//     printf('%d', hundred);
//     printf('%d', tens);
//     printf('%d', once);
// }

int main()
{
    int num = 7;
    int thousand, hundred, tens, once;

    char *rome[15];
    int count = 0;
    thousand = num / 1000;
    hundred = (num % 1000) / 100;
    tens = (num % 100) / 10;
    once = (num % 10) / 1;

    for (int k = 0; k < 4; k++)
    {

        if (thousand)
        {
            for (int i = 0; i < thousand; i++)
            {
                rome[count] = "M";
                count++;
            }
        }
        else if (hundred)
        {
            if (hundred > 8)
            {
                rome[count] = "C";
                count++;
                rome[count] = "M";
                count++;
            }
            else if (hundred <= 3)
            {

                for (int i = 0; i < thousand; i++)
                {
                    rome[count] = "M";
                    count++;
                }
            }
            else
            {
                if ((5 - hundred))
                {
                    rome[count] = 'C';
                    count++;
                    rome[count] = "D";
                    count++;
                }
                else
                {
                    rome[count] = "c";
                    count++;
                }
            }
        }
        else if (tens)
        {
            if (tens > 8)
            {
                rome[count] = "X";
                count++;
                rome[count] = "C";
                count++;
            }
            else if (tens <= 3)
            {
                for (int i = 0; i < tens; i++)
                {
                    rome[count] = "C";
                    count++;
                }
            }
            else

            {
                if ((5 - tens))
                {
                    rome[count] = 'X';
                    count++;
                    rome[count] = "L";
                    count++;
                }
                else
                {
                    rome[count] = "L";
                    count++;
                }
            }
        }
    }
   
}