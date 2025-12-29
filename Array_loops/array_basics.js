// let numbers=[10, 20, 30, 40, 50];
// console.log(numbers)
// numbers.push("Uday")
// console.log(numbers)
// numbers.pop()
// numbers.unshift("Intergers")
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
//********************************************************************************************************************************************
//lets talk about some function and methods of an array
    // let numbers=[10, 20, 30, 40, 50];
    // console.log(numbers.length) // it will give the length of an array
    // console.log(numbers.indexOf(30)) // it will give the index of an element
    // console.log(numbers.includes(50)) // it will check whether the element is present in the array or not and return boolean value
    // console.log(numbers)
    // console.log(`Reversing the array:${numbers.reverse()}`)// it will reverse the array
    // console.log(`Sorting the array : ${numbers.sort()}`)
    // console.log("Maxium value in the array "+Math.max(...numbers))//here the (...) spread operator converts the array into a list of arguments
    // console.log("Minimum value in the array "+Math.min(...numbers))
//********************************************************************************************************************************************
let arr_1=[1,2,3,4,5,6,7,8,9,10]
console.log(arr_1 +"  ")
console.log("  After slicing and splicing the array:")
console.log(arr_1.slice(2,6))
console.log("  After splicing the array:")
console.log(arr_1.splice(3,5))

console.log(arr_1)