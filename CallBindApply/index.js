
const person = {
    name:'rahul',
    lastname:'shah',
    Fullname: function (homeTown , city) {
        return console.log(this.name , this.lastname ,homeTown , city);
    }
}

const person2 = {
    name:'Nikki',
    lastname:'shah',

}

// const store = person.Fullname.call(person2 , 'mumbai ' , 'india' )

const store = person.Fullname.apply(person2 , ['mumbai ' , 'india' ] )

// const store = person.Fullname.bind(person2 , 'mumbai ' , 'india' )

console.log(store);


const data = [1,2 ,3,4];

const main = data.filter( (data) => {
        const val = data + 2 
        return console.log(typeof(val));
})

const reUse = data.map( (data) =>  data * 2 )

console.log(reUse);

