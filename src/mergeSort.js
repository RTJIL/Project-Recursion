/**Func takes an array of nums and sort it by
 * -> spliting arr to left till one number left
 * -> take left array of 1 num and right array of 1 num, compare it
 * -> merge it
 * -> compare two bclocks of elems moving to the top (left & right)
 * -> merge it
 * -> do it for as much times as the depth of recursion
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const leftNums = mergeSort(arr.slice(0, Math.ceil(arr.length / 2))); //spliting arr to left till one number left
  const rightNums = mergeSort(arr.slice(Math.ceil(arr.length / 2))); ////spliting arr to right till one number left

  const sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < leftNums.length && j < rightNums.length) {
    if (leftNums[i] < rightNums[j]) {
      sortedArr.push(leftNums[i]);
      i++;
    } else {
      sortedArr.push(rightNums[j]);
      j++;
    }
  }

  //add leftover nums if have any
  sortedArr.push(...leftNums.slice(i))
  sortedArr.push(...rightNums.slice(j))
  return sortedArr;
}

console.log(mergeSort([2, 3, 1, 5]));
