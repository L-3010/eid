function findLongestUniqueSubarray(arr) {
    if (arr.length === 0) return [];

    let left = 0;
    let maxStart = 0;
    let maxLength = 0;
    let lastSeen = {};

    for (let right = 0; right < arr.length; right++) {
        let currentNum = arr[right];

        if (lastSeen[currentNum] !== undefined && lastSeen[currentNum] >= left) {
            left = lastSeen[currentNum] + 1;
        }

        lastSeen[currentNum] = right;

        let currentLength = right - left + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStart = left;
        }
    }

    let result = [];
    for (let i = 0; i < maxLength; i++) {
        result[i] = arr[maxStart + i];
    }

    return result;
}

const logs = [1, 2, 3, 1, 2, 3, 4, 5];
console.log(findLongestUniqueSubarray(logs)); 