//declaring elements
let randomBtn = document.getElementById("rndom_btn");
const main = document.getElementById("parent");
const secondary = document.getElementById("child");

//assigning variable
let emptyString = "";
let pepty = "";

//for loop which counts from 1 to 100
for (let i = 1; i <= 100; i++) {
  //create an if and else statement which will check if the total is a multiple of 3 and 5
  //if it is a multiple of 3 and 5, output the word "mozdig"
  if (i % 3 === 0 && i % 5 === 0) {
    pepty += `<p> ${i} = mozdig </p>`;
    //if it is a multiple of 3, output the word "moz"
  } else if (i % 3 === 0) {
    pepty += `<p>  ${i} = moz </p>`;
    //if it is a multiple of 5, output the word "dig"
  } else if (i % 5 === 0) {
    pepty += `<p> ${i} = dig </p>`;
  }

  //emptyString will show the numbers from 1 to 100
  emptyString += `<div> ${i} </div>`;

  //assigned emptyString to the main div
  main.innerHTML = emptyString;

  //assigned pepty to the secondary div
  secondary.innerHTML = pepty;
}






//random number generator moz dig
//declaring elements
// let randomBtn = document.getElementById("rndom_btn");

// let score = document.getElementById("score");

// let scoreTotal = "";

// document.addEventListener("click", () => {
//     //create a for loop between 1 and 100
//   let randomNumber = Math.floor(Math.random() * 100 + 1);
//   let total =  randomNumber += scoreTotal;
//  score.innerText = total;

//  //create an if and else statement which will check if the total is a multiple of 3 and 5
//     if (total % 3 === 0 && total % 5 === 0) {
//       score.innerText = "mozdig";
//     } else if (total % 3 === 0) {
//       score.innerText = "moz";
//     } else if (total % 5 === 0) {
//       score.innerText = "dig";
//     } else {
//       score.innerText = total;
//     }
// });
