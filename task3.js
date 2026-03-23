function calculateMaxProfit(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];

        let potentialProfit = currentPrice - minPrice;

        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }

    return maxProfit;
}

const stockPrices = [7, 1, 5, 3, 6, 4];
console.log(calculateMaxProfit(stockPrices));