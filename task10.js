function reconstructQueue(people) {
    let n = people.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            let p1 = people[j];
            let p2 = people[j + 1];

            let shouldSwap = false;
            if (p1.height < p2.height) {
                shouldSwap = true;
            } else if (p1.height === p2.height && p1.inFront > p2.inFront) {
                shouldSwap = true;
            }

            if (shouldSwap) {
                let temp = people[j];
                people[j] = people[j + 1];
                people[j + 1] = temp;
            }
        }
    }

    let result = [];
    for (let i = 0; i < n; i++) {
        let person = people[i];
        let position = person.inFront;

        for (let k = i; k > position; k--) {
            result[k] = result[k - 1];
        }
        
        result[position] = person;
    }

    return result;
}

const input = [
  { height:7, inFront:0 }, { height:4, inFront:4 }, { height:7, inFront:1 },
  { height:5, inFront:0 }, { height:6, inFront:1 }, { height:5, inFront:2 }
];

console.log(reconstructQueue(input));
