//Example 1:


// Input: grid = [[1,2,4],[3,3,1]]
// Output: 8
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
// - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
// - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
// The final answer = 4 + 3 + 1 = 8.
// Example 2:


// Input: grid = [[10]]
// Output: 10
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 10 from the first row. We add 10 to the answer.
// The final answer = 10

var deleteGreatestValue = function(grid) {
   let sum = 0;
    grid.forEach(row => row.sort((a,b) => b - a))
   

    while(grid[0].length){
        let column = [];
        for(let row of grid) 
            column.push(row.pop())
        sum += Math.max(...column)
        
    }
    return sum;
};
