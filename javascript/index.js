// object work 



// quation 1

const codeWithMe = {
    name:"Nikesh",
    age:18,
    "lets start code": true
}

const deleteSpace = delete codeWithMe["lets start code"];

console.log(deleteSpace);

const changeName = codeWithMe.name = "Nikesh rajbhar";

const delData = delete codeWithMe;

console.log(delData); 
// false we are not able to delete all Object 

function data(update = 'nikki') {
    return console.log(update);
}

data(changeName)

// quation 2


const func = (function (a) {
    delete a;
    return a;
},(5))

console.log(func);
// output was 5 becouse we are not pass any data in a 
//  and we delete this

// quation 3

const name = "fristName";
const valueData = "Nikesh";

let objectData = {

    name:valueData,
    // but i whant to Fristname over their property 
    [name]:valueData
}
console.log(objectData);

// quation 4

// i whant to all data of eatch of value 

const dataObj = {
    name:'harry',
    age:22,
    isAwesome:true
}

for ( key in dataObj) {
    console.log(key); // all property are there

    // i whant to value of in side of key 
    console.log(dataObj[key]); // Right 
}


// quation 5

const obj = {
    a:"one",
    b:"two",
    a:"three",
}

console.log(obj);


// quation 6
//  create a function multiplayByTwo(obj) 
//  multiplay all numaric property value of nums by 2

const nums = {
    a:100,
    b:200,
    title:'My Nums'
}

function destructure(params) {
    // return console.log(  params.a * 2 , params.b * 2); 

    for (key in params) {
        if (typeof params[key] === 'number') {
            const element = params[key] * 2;
            console.log(element);
        }
    }
}

destructure(nums)

console.log(nums); // 200 , 400
