// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]


    var smallerNumbersThanCurrent = function(nums) {
        var output = []; // initialize a empty array
        for( let i=0;i<nums.length;i++){ //to iterate through the first array for loop is used.
            var count = 0;  //count is declared
            for(let j=0;j<nums.length;j++){ //iterate through the second array for loop is used.
                if(nums[i]>nums[j]){ //condition
                    count+= 1;// count= count +1
                }
            }
            output.push(count); // count values will be pushed to output array 
        }
        return output; //return
    };
