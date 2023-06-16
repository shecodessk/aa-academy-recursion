/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/


//My train of thought:
//take one array element and compare it to the next
//take the smallest el out of nums and add it to sorted.
// repeat function with mutated nums and sorted until all el are added to sorted in inc num.
//base: once nums is empty, return function

function sort(nums, sorted = []) {
let min;
let index;
  
  
  //base case
  if(nums.length < 0)return;

  if(nums.length === 0)return sorted;

  if(nums.length === 1){
    
    sorted.push(nums[0]);
    //console.log( sorted)
  }

  else{
  // find smallest element in num
    min = Math.min(...nums);
    index = nums.indexOf(min);
    
    sorted.push(min);
    nums.splice(index, 1);

    //console.log(sorted) 
    //console.log(nums) 
    return sort(nums, sorted);
    
  }
  return sorted
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
