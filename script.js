// Get HTML elements (button and vote count display area)
const yesButton = document.getElementById("btn-yes");
const noButton = document.getElementById("btn-no");
const yesCount = document.getElementById("count-yes");
const noCount = document.getElementById("count-no");

// Initialize the vote count variables
let yesVotes = 0;
let noVotes = 0;

// Add an event listener to the "Yes" button
yesButton.addEventListener("click", function() {
    yesVotes++; 
    // Each time the “Yes” button be clicked, the number of votes +1
    yesCount.textContent = yesVotes; 
});

// Add an event listener to the "No" button
noButton.addEventListener("click", function() {
    noVotes++; 
    noCount.textContent = noVotes; 
});