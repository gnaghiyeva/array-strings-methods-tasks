// element -in deyeri null ve undefined olmayanlari qaytar
let data = [
    {
        name: 'daniel',
        age: 45
    },
    {
        name: 'john',
        age: 34
    },

    {
        name: 'robert',
        age: null
    },
    {
        name: 'jen',
        age: undefined
    },
    {
        name: null,
        age: undefined
    }
]

// let newData = data.filter(value=>value.name!=null && value.age!=undefined)

let newData = data.filter((value)=>{
    if(value.name!=null && value.age!=undefined){
        return value;
    }
})

console.log(newData);