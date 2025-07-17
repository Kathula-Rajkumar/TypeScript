JavaScript  + Types  = TypeScript

TypeScript helps you catch errors during development (before running code).

It’s developed and maintained by Microsoft.









//interface in TypeScript

interface User {
    firstname : string,
    lastname : string,
    age : number
}


function isLegal(user : User){
    if(user.age > 18){
        return true;
    }else{
        return false;
    }
}
function greet(user: User){
    console.log("Hi there " + user.firstname);
}

isLegal({
    firstname: "Rajkumar",
    lastname : "Kathula",
    age: 22
})
