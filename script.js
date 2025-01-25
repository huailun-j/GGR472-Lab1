const yesButton = document.getElementById("btn-yes");
const noButton = document.getElementById("btn-no");
const yesCount = document.getElementById("count-yes");
const noCount = document.getElementById("count-no");

let yesVotes = 0;
let noVotes = 0;

yesButton.addEventListener("click", function() {
    yesVotes++; 
    yesCount.textContent = yesVotes; 
});

noButton.addEventListener("click", function() {
    noVotes++; 
    noCount.textContent = noVotes; 
});