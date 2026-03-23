function trapWater(heights) {
    if (heights.length === 0) return 0;

    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (heights[left] < heights[right]) {
            
            if (heights[left] >= leftMax) {
                leftMax = heights[left];
            } else {
                totalWater = totalWater + (leftMax - heights[left]);
            }
            left++;
            
        } else {
            
            if (heights[right] >= rightMax) {
                rightMax = heights[right];
            } else {
                totalWater = totalWater + (rightMax - heights[right]);
            }
            right--;
            
        }
    }

    return totalWater;
}

const map = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapWater(map));