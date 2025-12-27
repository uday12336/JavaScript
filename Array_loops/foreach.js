const fruits = ['apple', 'banana', 'cherry'];
// Basic: Log each element
fruits.forEach(item => console.log(item));
// Output:
// apple
// banana
// cherry

// With index
fruits.forEach((item, place) => console.log(`${place}: ${item}`));
// Output:
// 0: apple
// 1: banana
// 2: cherry

// With full callback args (including the array)
fruits.forEach((fruit, index, arr) => {
  console.log(`${index}: ${fruit} (from ${arr.length}-item array)`);
});
// Output:
// 0: apple (from 3-item array)
// 1: banana (from 3-item array)
// 2: cherry (from 3-item array)