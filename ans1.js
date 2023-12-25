var score = 85; 

if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score < 80) {
  console.log("Grade: B");
} else if (score >= 60 && score < 70) {
  console.log("Grade: C");
} else if (score >= 50 && score < 60) {
  console.log("Grade: D");
} else if (score >= 0 && score < 50) {
  console.log("Grade: F");
} else {
  console.log("Invalid score. Please enter a score between 0 and 100.");
}
