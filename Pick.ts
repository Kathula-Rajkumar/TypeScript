->Pick is a utility type used to create a new type by selecting specific properties from an existing interface or type.


interface User {
  name: string;
  age: number;
  email: string;
  password: number;
}

// Define the fields you want to allow updating
type updatedUser = Pick<User, "name" | "email" | "password">;


function updatedUserProfile(original: User, updated: updatedUser) {
  console.log("Previous User Info:");
  console.log("Name:", original.name);
  console.log("Email:", original.email);
  console.log("Password:", original.password);
  console.log("Age:", original.age);

  console.log("\n Updated User Info:");
  console.log("Name:", updated.name);
  console.log("Email:", updated.email);
  console.log("Password:", updated.password);
}


const previousUser: User = {
  name: "Raj Kumar",
  age: 22,
  email: "oldemail@gmail.com",
  password: 111
};


const updatedData: updatedUser = {
  name: "Rajkumar",
  email: "rajkumar@gmail.com",
  password: 123
};

// Calling the function
updatedUserProfile(previousUser, updatedData);



//output 
Previous User Info:
Name: Raj Kumar
Email: oldemail@gmail.com
Password: 111
Age: 22

Updated User Info:
Name: Rajkumar
Email: rajkumar@gmail.com
Password: 123





//exclude in ts 

Exclude<"a" | "b" | "c", "a">   // Result: "b" | "c"

