function findSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum = currentSum + arr[i];

        while (currentSum > target && start < i) {
            currentSum = currentSum - arr[start];
            start = start + 1;
        }

        if (currentSum === target) {
            return {
                start: start,
                end: i
            };
        }
    }

    return -1;
}

const expenses = [1, 4,29, 20, 3, 10, 5];
const target = 33;

console.log(findSubarrayWithSum(expenses, target));