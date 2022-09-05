window.addEventListener('scroll', ()=>{
  let header = document.querySelector('.navbar');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition)
})


//Sixth section..................

const sixthLinks = document.querySelectorAll('.sixth-links');
const sixthContainers = document.querySelectorAll('.sixth-container');


window.onload=function(){
    sixthLinks.forEach(sixthLink =>{
        sixthLink.addEventListener('click', ()=>{
            sixthLinks.forEach(sixthLink => sixthLink.classList.remove('active'))
            sixthLink.classList.add('active')
        })
    })
  }


for (let i = 0; i < sixthLinks.length; i++) {
    sixthLinks[i].addEventListener('click', () => {
    sixthContainers[i].classList.add('active')
    for (let j = 0; j < sixthContainers.length; j++) {
    if (i !== j) {
    sixthContainers[j].classList.remove('active') 
    }
    }
    })
}

// sixthLinks.forEach((sixthLink, Iindex) =>{
//     sixthLink.addEventListener('click', ()=>{
//        sixthContainers.forEach((sixthContainer, CIndex) =>{
//         if(Iindex === CIndex){
//             sixthContainer.classList.add('active')
//         }else{
//             sixthContainer.classList.remove('active')
//         }
//        })  
//     })
// })

// const clearLinksActive = () => {
// Object.values(sixthContainers).forEach(item => item.classList.remove("active"))
// }
// Object.values(sixthLinks).forEach((link, idx) => {
// link.addEventListener("click", () => {
// clearLinksActive()
// sixthContainers[idx].classList.add("active")
// })
// })


//Filter script start from here
//Filter script start from here
//Filter script start from here

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('actives');
        }
        this.classList.add('actives')
        let dataFilter = this.getAttribute('data-link');
        for(let k = 0; k < itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "All"){
                itemBox[k].classList.remove('hide')
                itemBox[k].classList.add('active')
            }
        }
    })
}



// Testimonnial section
// Testimonnial section
// Testimonnial section


var carousel = document.querySelector('.carousele');
var carouselContent = document.querySelector('.carousel-contentt');
var slides = document.querySelectorAll('.slidee');
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

function addClone() {
   var lastSlide = carouselContent.lastElementChild.cloneNode(true);
   lastSlide.style.left = (-lengthOfSlide) + "px";
   carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
// addClone();

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll('.slidee');
  var slidesArray = Array.prototype.slice.call(slides);
  var width = 0;

  slidesArray.forEach(function(el, i){
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll('.slidee');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function(el, i){
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener('resize', setScreenSize);

function setScreenSize() {
  if ( window.innerWidth >= 992 ) {
    carouselDisplaying = 2;
  }else {
    carouselDisplaying = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll('.slidee');
  var slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
  var initialWidth = -lengthOfSlide;
  slidesArray.forEach(function(el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}


var rightNav = document.querySelector('.nav-right');
rightNav.addEventListener('click', moveLeft);

var moving = true;
function moveRight() {
  if ( moving ) {
    moving = false;
    var lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener('transitionend', activateAgain);
}

var leftNav = document.querySelector('.nav-left');
leftNav.addEventListener('click', moveRight);

// var moveLeftAgain = true;

function moveLeft() {
  if ( moving ) {
    moving = false;
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener('transitionend', replaceToEnd);
}




carouselContent.addEventListener('mousedown', seeMovement);

var initialX;
var initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener('mousemove', slightMove);
  document.addEventListener('mouseup', moveBasedOnMouse);
}

function slightMove(e) {
  if ( moving ) {
    var movingX = e.clientX;
    var difference = initialX - movingX;
    if ( Math.abs(difference) < (lengthOfSlide/4) ) {
      slightMoveSlides(difference);
    }  
  }
}

function getInitialPos() {
  var slides = document.querySelectorAll('.slidee');
  var slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function(el){
    var left = Math.floor( parseInt( el.style.left.slice(0, -2 ) ) ); 
    initialPos.push( left );
  });
}

function slightMoveSlides(newX) {
  var slides = document.querySelectorAll('.slidee');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function(el, i){
    var oldLeft = initialPos[i];
    el.style.left = (oldLeft + newX) + "px";
  });
}

function moveBasedOnMouse(e) { 
  var finalX = e.clientX;
  if ( initialX - finalX > 0) {
    moveRight();
  } else if ( initialX - finalX < 0 ) {
    moveLeft();
  }
  document.removeEventListener('mouseup', moveBasedOnMouse);
  carouselContent.removeEventListener('mousemove', slightMove);
}

//Scroll animation
//Scroll animation
//Scroll animation

window.addEventListener('scroll', ()=>{
  let scrollContents = document.querySelectorAll('.scrollDown')
  
  scrollContents.forEach(scrollContent =>{
    let contentPosition = scrollContent.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
      scrollContent.classList.add('scrollFixed')
    }
  })
})

window.addEventListener('scroll', ()=>{
  let scrollLefts = document.querySelectorAll('.scroll-left');
  let scrollRights = document.querySelectorAll('.scroll-right')

  scrollLefts.forEach(scrollLeft =>{
    let contentPosition = scrollLeft.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
      scrollLeft.classList.add('scrollCenter')
    }
  })
  scrollRights.forEach(scrollRight =>{
    let contentPosition = scrollRight.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
      scrollRight.classList.add('scrollCenter')
    }
  })
})






