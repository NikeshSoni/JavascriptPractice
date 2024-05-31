
const person1 = {
    Fname:"Nikesh",
    Lname:"Rajbhar",
    FullName: function (homeTown , country) {
        return console.log(this.Fname , homeTown , country, 'hi');
    }
}


const person2 = {
    Fname:"nikki",
    Lname:"Rajbhar",
}

//  Represent this keyWord 
const store =person1.FullName.call(person2 , "Mumbai"  , "India")

//  Apply
// right
const store1 =person1.FullName.apply(person2 , ["jaypur" , "India"]) 

// Wrong
// const store1 =person1.FullName.apply(person2  ,"Mumbai" , "India") 

console.log(store1);


// Bind  

const store3 =person1.FullName.bind(person2 , "jaypur" , "India") 

console.log(store3());