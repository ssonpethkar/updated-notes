// Question: Best time to Buy and sell stocks

// You are given an array prices where prices[i] is the price of a given stock on the i th day.
// You want to maximize your profit by choosing a single day to buy one stock.
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot acieve any profit, return 0.

// Input prices: [7, 1, 5, 3, 6, 4];   ------>>>> Output: 5;
// Input prices: [7, 6, 4, 3, 1];      ------>>>> Output: 0;

// Brute force solution 
const maxProfit = (prices) => {
    let globalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if (currentProfit > globalProfit) {
                globalProfit = currentProfit;
            }
        }
    }

    return globalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));     //  5
console.log(maxProfit([7, 6, 4, 3, 1]));     // 0

// Optimized Solution
const maximumProfit = (prices) => {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minStockPurchasePrice) {
            minStockPurchasePrice = prices[i];
        }

        let currentProfit = prices[i] - minStockPurchasePrice;
        profit = Math.max(profit, currentProfit);
    }

    return profit;
}

console.log(maximumProfit([7, 1, 5, 3, 6, 4]));     // 5
console.log(maximumProfit([7, 6, 4, 3, 1]));        //  0
