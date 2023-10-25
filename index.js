// TODO: Query for button with an id "theme-button"

let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}
themeButton.addEventListener("click", toggleDarkMode);

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.

let count = 3;

document.addEventListener("DOMContentLoaded", function(){
  // Add your query for the sign now button here
  let signNowButton = document.getElementById("sign-now-button");

  const addSignature = () => {
    // Write your code to manipulate the DOM here
    let name = document.getElementById("name").value;
    let hometown = document.getElementById("hometown").value;
    let signatures = document.querySelector(".signatures");
    let email = document.getElementById("email").value;
    let newSignature = document.createElement("p");

    newSignature.textContent = "️🖊️ " + name + " from " + hometown + " supports this";
    signatures.appendChild(newSignature);

    const oldCounter = document.getElementById("counter");
    oldCounter.remove();

    count = count + 1;

    const newCounter = document.createElement("p");
    newCounter.id = "counter";
    newCounter.textContent = "🖊️ " + count + " people have signed this petition and support this cause.";

    signatures.appendChild(newCounter); // Corrected from "signature" to "signatures"
  }



  // Add a click event listener to the sign now button here
});



// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for(let i =0; i < petitionInputs; i++)
    {
        if(petitionInputs[i].value.length < 2)
        {
          petitionInputs[i].classList.add('error');
          containsErrors = true;
        }
        else
        {
          petitionInputs[i].classList.remove('error');
        }
      
    }

  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors

}

signNowButton.addEventListener('click', validateForm);





















const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function(circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;

  circles.forEach(function(circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.9;
    y += (nextCircle.y - y) * 0.9;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
