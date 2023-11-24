function addNumber(a, b) {
  return a + b;
}

// arrow function
const addNumberFuction = (a, b) => a + b;

// loop

for (let i = 0; i <= 10; i++) {
  console.log("JS easy");
}
let count = 0;

while (true) {
  console.log("Nhat dep trai");
  if (count === 0) {
    break;
  }
}

// array

const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

console.log(numbers);

// destructuring

const [a, b, c] = [2, 3, 4];

console.log(a, b, c);

// spread
const numbers3 = [...numbers];

console.log(numbers3);

// map , filter , reduce

const numbers4 = numbers2.map((element) => element * element);

console.log(numbers4);

// querySelector | getElementById

const div1 = document.getElementById("div1");
div1.innerText = "NhatNQ dep trai";

const div2 = document.getElementById("div2");
div2.innerText = "NhatNQ dep trai lan thu 2";

const h1_text = document.createElement("h1");
h1_text.textContent = "Nhat dep trai lan thu 3";
div1.appendChild(h1_text);

const img_element = document.createElement("img");
img_element.src = "./image_testing.jpg";
div2.appendChild(img_element);

div2.removeChild(img_element);

console.log(div1.innerText);

// function for events
function inputHandler() {
  console.log("Anh Nhat dep trai lan thu 4");
}

document.getElementById("signInBtn").addEventListener("click", function(event){
    event.preventDefault();
    console.log("hello world")
  });
