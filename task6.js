function productExceptSelf(nums) {
    let n = nums.length;
    let result = [];

 
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

   
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        
        rightProduct = rightProduct * nums[i];
    }

    return result;
}

const input = [1, 2, 3, 4];
console.log(productExceptSelf(input)); 