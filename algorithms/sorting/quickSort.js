let numbers = [5, 7, 3, 15, 9];

function quickSort(array) {
    // cant sort an array with less than 2 elements in it
    if (array.length < 2) {
        return array;
    }
    // pick the index of the pivot...in this case it'll be the last element in the array
    const pivotIndex = array.length - 1;
    // get the number of the pivot index
    const pivot = array[pivotIndex];

    const leftArray = [];  // numbers that are smaller than the pivot will be put to the left
    const rightArray = []; // numbers that are larger than the pivot will be put to the right

    for (let i = 0; i < pivotIndex; i++) {
        // skip the pivot
        if (i === pivotIndex) {
            continue;
        }
        // if the number is less than or equal to the pivot it gets added to the left array
        // otherwise it gets added to the right array since it will be bigger than the pivot
        if (array[i] <= pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    // recursively call the quickSort function to continue sorting both left and right side of the pivot
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log('ORIGINAL ARRAY: ', numbers);
numbers = quickSort(numbers);
console.log('SORTED ARRAY: ', numbers);