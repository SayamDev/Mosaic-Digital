//Counts from 1 to 100

//For every number that is a multiple of 3, instead of outputting the number it outputs the word ‘moz’

//For every number that is a multiple of 5, instead of outputting the number it outputs the word ‘dig’

//For every number this is a multiple of 3 and 5, instead of outputting the number it outputs the word ‘mozdig’.

function mozdig() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("mozdig");
    } else if (i % 3 === 0) {
      console.log("moz");
    } else if (i % 5 === 0) {
      console.log("dig");
    } else {
      console.log(i);
    }
  }
}

mozdig();


//same solution but using ternary operator
function sol2() {
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0
      ? console.log("mozdig")
      : i % 3 === 0
      ? console.log("moz")
      : i % 5 === 0
      ? console.log("dig")
      : console.log(i);
  }
}

sol2();

//make sure you go into directory by typing : cd JS
//then
//type this code to run the code :   node script.js