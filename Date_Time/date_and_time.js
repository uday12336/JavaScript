// // let myDate=new Date()
// // // console.log(myDate)
// // // let currentDate=myDate.getDate()
// // console.log(myDate.toDateString())
// // console.log(myDate.toLocaleString())
// // console.log(myDate.getMonth())

// const Birthday=new Date("06-15-2004")
// console.log(Birthday.toLocaleDateString())
// console.log(Birthday.getFullYear())
// console.log(Birthday.getTime())
// let currentTime=Date.now()
// console.log(currentTime)
// let difference=currentTime-Birthday.getTime()
let now = Date.now()
let nowDate=new Date(now)
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
// console.log(nowDate.toLocaleDateString());
console.log(nowDate.toLocaleString())