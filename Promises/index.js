
// Promise me ham who code likhte hai 
// jo 3rd party par depend hota hai 

// jab ham ajax call karte hai tab


var ans = new Promise( (res , rej) => {
     return res('I have study right Now ?')
})

var store2 = ans.then( (data) => {
    console.log(data);
   return new Promise( (res , rej) => {
          return res('But i whant To Sleep right Now ?')
    })
})

var store3 = store2.then( (data) => {
    console.log(data);
     return new Promise ( (res , rej) => {
         return res('yes I Complate My study')
     })
})


var store4 = store3.then( (data) => {
        console.log(data);

        return new Promise( (res , rej) => {
             return res('i Sleep Now ')
        })
})

