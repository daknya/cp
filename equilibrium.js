class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n) {
        //         aLgorithm
        //  1. iterate through i =1 to n;
        //     -> declare a left sum variable to zero 
        //     -> iterate through 0 till i and add arr[i] to left sum 
        //     ->declare a rightsum variable to zero 
        //     -> iterate through i+1 till n and add arr[i] to rightsum 
        //     ->check if the left sum is equal to right sum the result arr[i]
        //     return -1 in case of no point

        //your code here


        let sum = 0;

        for (let m = 0; m < n; m++) {
            sum = sum + a[m];

        }



        let leftsum = 0;

        for (let j = 0; j < n; ++j) {



            sum = sum - a[j];

            if (sum === leftsum) {
                return j + 1;

            }
            leftsum = leftsum + a[j];
        }

        return -1;

    }
}