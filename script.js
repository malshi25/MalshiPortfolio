let words = document.querySelectorAll(".word");
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = (currentWordIndex + 1) % words.length; // Update the currentWordIndex
}

setInterval(changeText, 3000); // Call changeText every 3000 milliseconds (3 seconds)

// circle skill///////////////////////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;

  for(let i = 0 ; i < dots ; i++){
    points +='<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for(let i = 0; i<percent ; i++){
    pointsMarked[i].classList.add('marked')
  }
})

// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');


//active menu////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar////////////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("stickey",this.window.scrollY > 50)
})