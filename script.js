let box1 = document.querySelector(".box1");
let input1 = document.querySelector(".box1 input");
let error1 = document.querySelector(".box1 p");
let button1 = document.querySelector(".box1 button");

let box2 = document.querySelector(".box2");
let head2 = document.querySelector(".box2 h1");
let input2 = document.querySelector(".box2 input");
let error2 = document.querySelector(".box2 p");
let button2 = document.querySelector(".box2 button");

let box3 = document.querySelector(".box3");
let input3 = document.querySelector(".box3 input");
let error3 = document.querySelector(".box3 p");
let button3 = document.querySelector(".box3 button");

let box4 = document.querySelector(".box4");
let head4 = document.querySelector(".box4 h1");
let input4 = document.querySelector(".box4 input");
let error4 = document.querySelector(".box4 p");
let button4 = document.querySelector(".box4 button");
let chanceLeft = document.querySelector(".box4 .chanceLeft");

let box5 = document.querySelector(".box5");
let head5 = document.querySelector(".box5 h1");
let p5 = document.querySelector(".box5 p");
let button5 = document.querySelector(".box5 button");

let initial = document.querySelector(".initial");
let initial2 = document.querySelector(".initial2");

let chance = 5;
let score1 = 0;
let score2 = 0;
let lettersOnly = /^[A-Za-z\s]+$/;

button1.addEventListener("click", function () {
  if (input1.value === "") {
    error1.innerHTML = "Please Enter Your Name";
  } else {
    if (!lettersOnly.test(input1.value)) {
      error1.innerHTML = "Please Enter a Text";
    } else {
      box1.style.display = "none";
      box2.style.display = "block";
      head2.innerHTML = input1.value;
    }
  }
});

button2.addEventListener("click", function () {
  let checkNumber = Number.isFinite(Number(input2.value));

  if (input2.value === "") {
    error2.innerHTML = "Please Enter a Number";
  } else if (checkNumber) {
    if (Number(input2.value) >= 0 && Number(input2.value) <= 19) {
      box2.style.display = "none";
      box3.style.display = "block";
      console.log("show19");
    } else {
      error2.innerHTML = "Please Enter a Number Between 0-19";
    }
  } else {
    error2.innerHTML = "Please Enter Only Number";
  }
});

button3.addEventListener("click", function () {
  if (input3.value === "") {
    error3.innerHTML = "Please Enter Your Name";
  } else {
    if (!lettersOnly.test(input3.value)) {
      error3.innerHTML = "Please Enter a Text";
    } else {
      box3.style.display = "none";
      box4.style.display = "block";
      head4.innerHTML = input1.value;
    }
  }
});

button4.addEventListener("click", function () {
  let checkNumber = Number.isFinite(Number(input4.value));

  if (input4.value === "") {
    error4.innerHTML = "Please Enter a Number Between 0-19";
  } else if (checkNumber) {
    if (input2.value == input4.value) {
      box4.style.display = "none";
      box5.style.display = "block";
      head5.innerHTML = `${input3.value} Wins`;
      p5.innerHTML = "The Number is " + input2.value;
      score2++;
      initial2.innerHTML = input3.value + " Score: " + score2;
    }
    
    else {
      chance--;
      chanceLeft.innerHTML = "Chance Left: " + chance;
      if (chance == 0) {
        box4.style.display = "none";
        box5.style.display = "block";
        head5.innerHTML = input1.value + " Wins";
        p5.innerHTML = "The Number is " + input2.value;
        score1++;
        initial.innerHTML = input1.value + " Score: " + score1;
      }
    }
  }
  else {
    error4.innerHTML = "Please Enter Only Number";
  }
});

button5.addEventListener("click", function () {
  if (button5 == button5) {
    box5.style.display = "none";
    box1.style.display = "block";
  } else {
    box5.style.display = "none";
    box1.style.display = "block";
  }
});
