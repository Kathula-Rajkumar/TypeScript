Records are like key value pairs



type User = Record<string, number>

const user: User = ({
    "Rajkumar" : 21,
    "Arun": 22
})

console.log(user);
