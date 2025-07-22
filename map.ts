// Define a map with string keys and number values
const userScores: Map<string, number> = new Map();

// Using set() to add data
userScores.set("Rajkumar", 95);
userScores.set("Suresh", 88);
userScores.set("Priya", 76);

// Using get() to retrieve data
console.log("Rajkumar's score:", userScores.get("Rajkumar")); // 95
console.log("Priya's score:", userScores.get("Priya"));       // 76

// Check if a key exists
if (userScores.has("Suresh")) {
    console.log("Suresh's score is available.");
}

// Iterate over the map
userScores.forEach((score, name) => {
    console.log(`${name} scored ${score}`);
});


//output

Rajkumar's score: 95
Priya's score: 76
Suresh's score is available.
Rajkumar scored 95
Suresh scored 88
Priya scored 76
