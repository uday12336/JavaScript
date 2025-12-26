let palnum = 121
let rev=0
let result = palnum
while(palnum != 0){
    d=palnum%10
    rev=rev*10+d
    palnum=Math.floor(palnum/10)
}
console.log(rev)

if(result==rev){
    console.log(`${result} is a palindrome number. `)
}
else{
    console.log(`${result} is not a palindrome number `)
}