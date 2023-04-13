// - isharesini / ile deyishin
let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];

let arr = bdays.toString().replaceAll('-','/');
let final = arr.split(',')

console.log(final);