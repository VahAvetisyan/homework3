// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index  where sorting order is violated.

let arr = [-9, -4, -4, 3, 12, 4, 5];

function whereSortingIsViolated(array) {
    let index = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= array[i + 1]) {
            index = -1;
        } else {
            return i + 1;
        }
    }
    return index;
};

// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

let arr = [[1], [2], [3], [4]]

function sum(array) {
    let sumArr = [];
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
        sumArr.push(sum)
    }
    return sumArr;
};

// 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

let arr = [5, 4, 78, 0, -3, 7];

function getOddNums(arr) {
    let newArr = arr.filter(el => el % 2);
    newArr = newArr.map(el => el * newArr.length)
    return newArr;
};

// 4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.

function fn(from, to, step) {
    let arr = [];
    for (let i = from; i <= to; i += step) {
        arr.push(i);
    }
    return arr;
};

// 5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements);

function frequency(array) {
    let frequency = {};
    for (let num of arr) {
        if (num in frequency) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    for (let key in frequency) {
        console.log(`${key}: ${frequency[key] / array.length}`);
    }
}