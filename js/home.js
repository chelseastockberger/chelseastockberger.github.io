var i = 0;
var j=0;
var txt = 'Chelsea Stockberger';
var txt2 = 'I am a senior set to get my Bachelor of Science in Computer Science at the University of Colorado Boulder. I love all things programming, problem solving, and information technology!';
var speed = 70;
var speed2 = 15;

// Writes hello world
function typeWriter() {

  if (i < txt.length) {

    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

    if(i == txt.length){
      typeWriter2();
    }

  }

}

// Writes my intro
function typeWriter2() {

  if (j < txt2.length) {

    document.getElementById("intro2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed2);

    if(j == txt2.length){
      showArr();
    }

  }

}


function showArr(){
  document.getElementById("line").style.visibility = 'visible';
  showChart();
}

function showChart(){
 
  setTimeout(() => { document.getElementById("chartholder").classList.add("fade-in");
  document.getElementById("chart").style.visibility = 'visible'; }, 1000);

}

// https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
