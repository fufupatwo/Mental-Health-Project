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

document.addEventListener("DOMContentLoaded", function() {
  // Add your query for the sign now button here
  const email = document.getElementById('email');
  let signNowButton = document.getElementById("sign-now-button");

  const addSignature = (person) => {
    // Write your code to manipulate the DOM here

    /* let name = document.getElementById("name").value;
     let hometown = document.getElementById("hometown").value;
     let email = document.getElementById("email").value;
     */
    let signatures = document.querySelector(".signatures");
    let newSignature = document.createElement("p");


    newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this`;
    signatures.appendChild(newSignature);

    const oldCounter = document.getElementById("counter");
    oldCounter.remove();

    count = count + 1;

    const newCounter = document.createElement("p");
    newCounter.id = "counter";
    newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    signatures.appendChild(newCounter); // Corrected from "signature" to "signatures"
    toggleModal(person);
  }


  const validateForm = () => {

    let containsErrors = false;

    var petitionInputs = document.getElementById("sign-petition").elements;
    let person = {
      name: petitionInputs[0].value, // accesses and saves value of first input
      hometown: petitionInputs[1].value, // accesses and saves value of second input
      email: petitionInputs[2].value // accesses and saves value of third input
    }
    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {
      if (person.hometown.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      }
      else {
        petitionInputs[i].classList.remove('error');
      }

    }
    let email = document.getElementById('email');
    if (!email.value.includes('.com')) {
      email.classList.add('error');
      containsErrors = true;
    } else {
      email.classList.remove('error');
    }


    // TODO: Validate the value of each input
    if (containsErrors == false) {
      addSignature(person);
      for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = "";
        containsErrors = false;
      }
    }

    // TODO: Call addSignature() and clear fields if no errors

  }

  signNowButton.addEventListener('click', validateForm);

  // Add a click event listener to the sign now button here
});






let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;

    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    }
    else {
      revealableContainers[i].classList.remove("active");
    }

  }

}
window.addEventListener('scroll', reveal);
function reduceMotion() {
  animation.transitionDuration = '0s';
  animation.transitionDelay = '0s';
  animation.transitionProperty = 'none';
  animation.initialOpacity = 1;
  animation.transitionTimingFunction = 'ease';

  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionProperty = animation.transitionProperty;
    revealableContainers[i].style.opacity = animation.initialOpacity;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
}
const reduceMotionButton = document.getElementById("toggle-motion");
reduceMotionButton.addEventListener("click", reduceMotion);














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


let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");
let intervalId = null; // Initialize intervalId to null

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
};

function toggleModal(person) {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("modal-text-container");

  modal.style.display = "flex";

  modalContent.textContent = `Thank you so much ${person.name} for signing the petition! ${person.hometown} represent!`;

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);

  intervalId = setInterval(scaleImage, 500); // Now assign the intervalId
}