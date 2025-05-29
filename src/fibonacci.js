/*take number from user 
->than
add as much fibonci nums to array as user input 
*/

function fibsIteration(num) {
  let arr = [0, 1];

  if (num === 0) return null;

  if (num === 1) return [arr[0]];

  for (let i = 2; i < num; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr;
}

/** as we come to solving same problem using fibonacci here what we need to do
 * -> write conditions for handling 0, 1 q of fib numbers 
 * -> create an array which will be the entry point for recursion
 * -> when fibsec(nim - 1) === 1 return [0, 1]
 * -> push values in order to array
 * -> print array
*/

function fibsRec(num) {
  if (num === 0 || num === 1) return [0];
  if (num === 2) return [0, 1];

  const arr = fibsRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibsRec(100))

/**
 * ->fibsec(2)           => [0, 1, 1] => 1 + 1 = 2 
 * ->fibsec(1) return [0, 1]    ↑        arr.push(2) => [0, 1, 1, 2]
 * arr = [0, 1]                 ↑
 * 0 + 1 = 1                    ↑
 * arr.push(1) =>     [0, 1, 1] ↑
 */