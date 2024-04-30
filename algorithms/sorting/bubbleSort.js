/* 

Bubble Sort is simple algorithm that uses a nested for loop to iterate over a list and compares the item of the index to the
item directly after it. if the current number is greater than the number that comes directly after it, it simply swaps the 2 
numbers

*/

const numbers = [5, 2, 45, 27, 52];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        let x = numbers[j];
        let y = numbers[j + 1];
        if (x > y) {
            numbers[j] = y;
            numbers[j + 1] = x;
        }
    }
}

console.log(numbers);
// RETURNS: [2, 5, 27, 45, 52]