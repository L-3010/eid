function minWindowSubarray(arr, target) {
    if (arr.length === 0 || target.length === 0) return [];

    let targetCount = {};
    for (let i = 0; i < target.length; i++) {
        targetCount[target[i]] = (targetCount[target[i]] || 0) + 1;
    }

    let windowCount = {}; 
    let required = 0; 
    let totalRequired = 0; 
    for (let key in targetCount) totalRequired++;

    let left = 0;
    let minLen = Infinity;
    let minStart = -1;
    let formed = 0; 

    for (let right = 0; right < arr.length; right++) {
        let char = arr[right];
        windowCount[char] = (windowCount[char] || 0) + 1;

        if (targetCount[char] !== undefined && windowCount[char] === targetCount[char]) {
            formed++;
        }

        while (formed === totalRequired) {
            let currentLen = right - left + 1;
            
            if (currentLen < minLen) {
                minLen = currentLen;
                minStart = left;
            }

            let leftChar = arr[left];
            windowCount[leftChar]--;
            
            if (targetCount[leftChar] !== undefined && windowCount[leftChar] < targetCount[leftChar]) {
                formed--;
            }
            left++;
        }
    }

    if (minStart === -1) return [];
    let result = [];
    for (let i = 0; i < minLen; i++) {
        result[i] = arr[minStart + i];
    }
    return result;
}

const arr = [1, 2, 2, 3, 1, 2, 3];
const target = [1, 2, 3];
console.log(minWindowSubarray(arr, target)); 