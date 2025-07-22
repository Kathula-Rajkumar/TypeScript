Partial makes all properties in a type optional. It's useful when you're only updating some fields of an object.


// Define the full User interface
interface User {
  name: string;
  age: number;
  email: string;
  password: number;
}

// Partial type: all fields are optional
type UpdatedUser = Partial<User>;

// Function to update user profile
function updateUserProfile(original: User, updates: UpdatedUser): User {
  const updatedUser = { ...original, ...updates };

  console.log(" Previous User Info:");
  console.log(original);

  console.log("\n Updated Fields:");
  console.log(updates);

  console.log("\n Final Updated User:");
  console.log(updatedUser);

  return updatedUser;
}

// Sample original user data
const previousUser: User = {
  name: "Raj Kumar",
  age: 22,
  email: "oldemail@gmail.com",
  password: 111
};

// Only updating email and password
const updates: UpdatedUser = {
  email: "rajkumar@gmail.com",
  password: 123
};

// Call the function
updateUserProfile(previousUser, updates);


//output

Previous User Info:
{ name: 'Raj Kumar', age: 22, email: 'oldemail@gmail.com', password: 111 }

Updated Fields:
{ email: 'rajkumar@gmail.com', password: 123 }

Final Updated User:
{ name: 'Raj Kumar', age: 22, email: 'rajkumar@gmail.com', password: 123 }

