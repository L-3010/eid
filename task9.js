function hasCycle(arr) {
    let visited = [];
    let currentIndex = 0;
    let vCount = 0;

    while (currentIndex >= 0 && currentIndex < arr.length) {
        
        for (let i = 0; i < vCount; i++) {
            if (visited[i] === currentIndex) {
                return true; 
            }
        }

        visited[vCount] = currentIndex;
        vCount++;

        currentIndex = currentIndex + arr[currentIndex];
    }

    return false;
}
const game = [2, -1, 1, 2, 2];
console.log(hasCycle(game)); 