//<T>  defines whether it can be a STRING or NUMBER 

function getFirstElement<T>(arr: T[]){
    return arr[1];
}

const el = getFirstElement<string>(["Kathula", "Rajkumar"])
console.log(el)

//outputs
Rajkumar 

function getFirstElement<T>(arr: T[]){
    return arr[1];
}

const el = getFirstElement<string>([1, "Rajkumar"])// this throws an error in ts because we declared the input to be a string and using mix of string and number.
console.log(el)

