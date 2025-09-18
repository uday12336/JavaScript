// for in loop is like  for of lop we can iterate this with for in loop 
const student={
    Name:"uday",
    rollno:106565,  
}
for (const key in student) {
    console.log(`${key} value is : ${student[key]} `);
}