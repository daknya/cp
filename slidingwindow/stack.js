/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    var maxresult = 0;
    var min = 0;
    var max = 1;
    for (i = 0; i < prices.length; i++) {
        if (prices[min] < prices[max]) {
            maxresult = Math.max(maxresult, (prices[max] - prices[min]))
            max++;
        }
        else {
            min = max;
            max++;
        }

    }
    return maxresult;



};