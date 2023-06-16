/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
const subsets = (array) =>{

  if(array.length === 0){
    return [[]]
  }


  let el = array.slice(-1) // takes the last element of the array
  let prev =  subsets(array.slice(0, -1)); //take the remaining elements of the array.

  return prev.concat(addEl(prev, el))

}

  function addEl(arrA, el) {
  let firstEl = arrA[0];
  let rest = arrA.slice(1)

  if (arrA.length === 1) return [firstEl.concat(el)]; // base

  return [firstEl.concat(el)].concat(addEl(rest, el)) 
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
