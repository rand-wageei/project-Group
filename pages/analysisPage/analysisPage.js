// Get references to the button and the questions section
let showBtn = document.getElementById("resultBtn");
let questionDiv = document.getElementById("Questions");

// let showBtn = document.querySelector(".resultBtn");
// let questionDiv = document.querySelector(".Questions")
// Add a click event listener and functionality to the button  

showBtn.addEventListener ('click', () => {
  questionDiv.style.display = 'grid'
});

