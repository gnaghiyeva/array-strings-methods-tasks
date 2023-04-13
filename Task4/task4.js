//butun regemlerini yuvarlaqlashdirin
let numbers = [1.5, 2.56, 5.1, 12.33];
let newNumbers = numbers.map((value)=>{
    return Math.round(value);
});

console.log(newNumbers);