let runningSum = function (nums) {
  let sum = new Array(nums.length);
  sum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  return sum;
};
console.log(runningSum([1, 2, 3, 4]));
