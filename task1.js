function compressLogs(logs) {
    if (logs.length === 0) {
        return [];
    }

    let compressed = []; 
    let resultIndex = 0; 
    let count = 1;       

    for (let i = 1; i < logs.length; i++) {
        
        if (logs[i].event === logs[i - 1].event) {
            count = count + 1;
        } else {
            compressed[resultIndex] = {
                event: logs[i - 1].event,
                count: count
            };
            
            resultIndex = resultIndex + 1;
            
            count = 1;
        }
    }

    compressed[resultIndex] = {
        event: logs[logs.length - 1].event,
        count: count
    };

    return compressed;
}

const data = [
  { event: "click", time: 1 },
  { event: "click", time: 2 },
  { event: "scroll", time: 3 },
  { event: "scroll", time: 4 },
  { event: "click", time: 5 }
];

console.log(compressLogs(data));