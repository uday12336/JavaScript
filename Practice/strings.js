// const name ="UdayPratapSingh"
// const lastName="Jayas"
// const fullName=name+lastName
// console.log(fullName)
// console.log(fullName.charAt(6))
// console.log(fullName.length)
// console.log(name.length)
// for(  letter of name){
//     console.log(letter)
// }
// console.log(name.toUpperCase())
//all the function that is perform on the string is in console Cheak it all once For better Under Standing .

const newString="HelloWorld"
console.log(newString.split("",4))
console.log(newString.replace("World","Everyone"))
console.log(newString.length)

console.log(newString.trim().split("").reverse().join(""))//convrting string to array then reversing it and joining it back to string
console.log(newString)

// console.log(newString.includes("Hello"))
// console.log(newString.indexOf("o"))
// console.log(newString.substring(0,5))
// console.log(newString.slice(-5))
// console.log(newString.slice)
function reverse(s) {
  return s.length <= 1 ? s : reverse(s.slice(1)) + s[0];
}
console.log(reverse(newString))