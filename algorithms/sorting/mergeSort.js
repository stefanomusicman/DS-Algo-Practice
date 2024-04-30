/*

The merge sort algorithm is a sorting algorithm that revolves around the idea of divide and conquer.

It's about taking an unsorted list, splitting it in half and continuously doing this until each number is essentially an array of 1 number
This is done using recursion, once this is done, you sort the list and work your way back to the top and sort every set of lists until you 
arrive at the original list which will be sorted

*/

const array = [250, 150, 25, 45, 78, 39, 12, 8];

// this function must take an array that is unsorted
function mergeSort(inputArray) {
    // Establish a base case: in this case if the length of the input the array is less than 2,
    // we know that we can't split the array since there is either no elements or one element
    if (inputArray.length < 2) {
        return;
    }

    // get the index of the mid-point of the array
    let middleIndex = Math.floor(inputArray.length / 2);
    // We need to split the array into 2 arrays
    // the first array will be the numbers on the left side of the mid point
    // the second array will be the numbers on the right side of the mid point
    let leftArray = inputArray.slice(0, middleIndex);
    let rightArray = inputArray.slice(middleIndex);

    // we call the mergeSort function on both the left and right array in order to continue to split them up
    mergeSort(leftArray);
    mergeSort(rightArray);
    // finally we call the sort function to carry out the sorting
    merge(leftArray, rightArray, inputArray);
}

// this will be a helper function that will be repsonsible for actually doing the sorting betweent the left and right arrays
// this function will need to take in 3 parameters, the left and right array and the original array.
// the left and right array will be sorted and modify the original array which will be sorted
function merge(leftArray, rightArray, originalArray) {
    // we need to get the sizes of the left and right array
    let leftSize = leftArray.length;
    let rightSize = rightArray.length;

    // now we need three pointers to keep track of different indices
    let i = 0; // keeping track of the index of left array
    let j = 0; // keeping track of the index of right array
    let k = 0; // keeping track of the index of original array

    // here we are going to compare the left and right array to do the sorting
    // if the number of left array is smaller than the right, we place that number in the original array
    // and increment the index of the left array and repeat the process

    // this is the loop that will run when both the left and right array has numbers in it for comparison
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            originalArray[k] = leftArray[i];
            i++;
        } else {
            originalArray[k] = rightArray[j];
            j++;
        }
        k++;
    }
    // if the left or right array no longer has any numbers to compare then it will break out of the 
    // loop above but there will likely still be a some numbers that need to be added to the original array

    // this loop checks if there's anything left in the left array, if so it will add it to the original array
    while (i < leftSize) {
        originalArray[k] = leftArray[i];
        i++;
        k++;
    }

    // this loop checks if there's anything left if the right array, if so it will add it to the original array
    while (j < rightSize) {
        originalArray[k] = rightArray[j];
        j++;
        k++;
    }
}

console.log('ORIGINAL ARRAY: ', array);

mergeSort(array);

console.log('SORTED ARRAY: ', array);