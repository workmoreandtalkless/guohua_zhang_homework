// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  // if (typeof str !== 'number') {
  //   return true;
  // }
  // return false;
  return !isNaN(str)&&str.trim() !== '';
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (typeof element === 'number') {
      sum+=element;
    }else if (!isNaN(element)) {
      sum+=parseInt(element);
    }
  }
  return arr.length>0? sum/arr.length:0;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];

  let sum = 0;
  for (let index = 0; index < people.length; index++) {
    const element = people[index];
    sum+=element.age;    
  }
  return people.length > 0 ? sum/people.length : 0;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  let sum = 0;
  let count = 0;
  people.forEach(element => {   
    if (element.job === job) {
      sum+=element.age;
      count++
    }
  }
  );
  return count == 0 ? 0: sum/count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  let max = 0;
  arr.forEach(element => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  let max = '';
  str.split(' ').forEach(element => {
    if (element.length > max.length) {
      max = element;
    }
  });
  return max;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let even = [];
  arr.forEach(element => {
    if (element % 2 === 0) {
      even.push(element);
    }
  });
  return even;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  let sorted = [...num];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  for (let i = 0; i < num.length; i++) {
    for(let j = 0; j < num.length; j++) {
      if (num[j] > num[j + 1]) {
        let temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
      }
    }
  }
  return num;
}
export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  let filtered = [];
  arr.forEach(element => {
    if (typeof element !== typeToRemove) {
      filtered.push(element);
    }
  });
  return filtered;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let changed = [];
  nums.forEach(element => {
    switch (operator) {
      case '+':
        changed.push(element + amount);
        break;
      case '-':
        changed.push(element - amount);
        break;
      case '*':
        changed.push(element * amount);
        break;
      case '/':
        changed.push(element / amount);
        break;
    }
    
  });
  return changed;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
    let filtered = [];
    nums.forEach(element => {
      if (element !== num) {
        filtered.push(element);
      }
    });
    return filtered;
}
