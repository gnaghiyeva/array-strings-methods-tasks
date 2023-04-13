// Verilmish stringdeki ededleri cemleyin --> reduce 
const b = "5,4,3,2,1";

let totalString = b.split(",").map(Number).reduce((sum,value)=>{
    return sum+value;
},0);
console.log(totalString);



