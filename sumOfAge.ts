interface User {
    name : string,
    age : number
}

function sumOfAge(user1 : User, user2 : User){
    return user1.age + user2.age;
}

const result = sumOfAge({
    name: "Rajkumar",
    age : 21
},
{
    name : "Arun" ,
    age : 22
});

console.log(result);


output
43
