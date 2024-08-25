// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');


// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  
 
} 
else  {

    currentSlide++;

    theChecker();

  }
  console.log(currentSlide)
  
}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  }
   else {

    currentSlide--;

    theChecker();
    
  

  }

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  // slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if Current Slide is The First
  // let imagec = setInterval(()=>{
  //   currentSlide++
  //   console.log(currentSlide)
  // //   if(currentSlide == slidesCount) {
  // // clearInterval(imagec)

  // //   let imager = setInterval(()=>{
  // //     currentSlide--
  // //     // console.log(currentSlide)
  // //     sliderImages[currentSlide - 1].classList.add('active');
  // //     sliderImages[currentSlide ].classList.remove('active');
  // //     paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  // //     paginationCreatedUl.children[currentSlide ].classList.remove('active');
  // //     if(currentSlide == 1) {
  // //       clearInterval(imager)
  // //       currentSlide = 5
  // //       sliderImages[currentSlide - 1].classList.add('active');
  // //       paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  // //       paginationCreatedUl.children[currentSlide - 2].classList.remove('active');
  // //       paginationCreatedUl.children[currentSlide - 1].classList.remove('active');
  // //     }
  // //   },1000)
  // // }
  
  //   sliderImages[currentSlide - 1].classList.add('active');
  //   paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  //   paginationCreatedUl.children[currentSlide - 2].classList.remove('active');
  //   // if (currentSlide == 5) {
  //   //   currentSlide = 1
  //   //   console.log(currentSlide)
  //   // paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  //   // paginationCreatedUl.children[5].classList.remove('active');
  //   // }
  // },1000)
  if (currentSlide == 1) {
let imagec = setInterval(()=>{
  currentSlide++
  console.log(currentSlide)
  if(currentSlide == slidesCount) {
// clearInterval(imagec)

  // let imager = setInterval(()=>{
  //   currentSlide--
  //   console.log(currentSlide)
  //   sliderImages[currentSlide - 1].classList.add('active');
  //   sliderImages[currentSlide ].classList.remove('active');
  //   paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  //   paginationCreatedUl.children[currentSlide ].classList.remove('active');
  //   // if(currentSlide == 1) {
  //   //   // clearInterval(imager)
  //   //   currentSlide = 5
  //   //   sliderImages[currentSlide - 1].classList.add('active');
  //   //   paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  //   //   paginationCreatedUl.children[currentSlide - 2].classList.remove('active');
  //   //   // paginationCreatedUl.children[currentSlide - 1].classList.remove('active');
  //   // }
  // },1000)
}

  sliderImages[currentSlide - 1].classList.add('active');

  paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  paginationCreatedUl.children[currentSlide - 2].classList.remove('active');
  if (currentSlide == 5) {
    currentSlide = 1
    console.log("yehia")
    console.log(currentSlide)
  sliderImages[currentSlide - 1].classList.add('active');
  // sliderImages[4].classList.remove('active');
  paginationCreatedUl.children[currentSlide].classList.add('active');
  // paginationCreatedUl.children[currentSlide + 1].classList.remove('active');
  removeAllActive()
  // paginationCreatedUl.children[4].classList.remove('active');
  }
},6000)
// if (currentSlide == slidesCount) {

//   let imager = setInterval(()=>{
//     currentSlide--
//     console.log(currentSlide)
//     sliderImages[currentSlide - 1].classList.add('active');
//     paginationCreatedUl.children[currentSlide - 1].classList.add('active');
//     paginationCreatedUl.children[currentSlide - 2].classList.remove('active');
    
//   },1000)
// }

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  }
 
   else {
    currentSlide = 1
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');
   
  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {
    // let imager = setInterval(()=>{
    //   currentSlide--
    //   console.log(currentSlide)
    //   sliderImages[currentSlide - 1].classList.add('active');
    //   paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    //   paginationCreatedUl.children[currentSlide - 2].classList.remove('active');
      
    // },1000)
    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}
// start counter
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  
// let countDownDate = new Date("Aug 1, 2024 23:59:59").getTime();
let countDownDate = new Date(2024, 7, 26,23, 59, 59 ).getTime();
  let dateNow = new Date().getTime();
// console.log(countDownDate)
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  // document.querySelector(".days").innerHTML = days
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours)
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(minutes)
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  // console.log(seconds)
  let sc = document.querySelector(".seconds")
  sc.innerHTML = seconds
  // console.log(sc.innerHTML)
  let hr = document.querySelector(".hours")
  hr.innerHTML = hours
  // console.log(hr.innerHTML)
  let mn = document.querySelector(".minutes")
  mn.innerHTML = minutes
  // console.log(mn.innerHTML)

  if (dateDiff < 0) {
    clearInterval(counter);
    let button = document.querySelectorAll(".button")
      button.forEach((i =>{
      i.setAttribute("id", 'disabled')
      })) 
      let card = document.querySelector(".card")
      let card2 = document.querySelector(".card2")
      let card3 = document.querySelector(".card3")
      let pop = document.createElement("div")
      pop.setAttribute('class', "pop")
      let msg = document.createElement("h2")
       msg.innerHTML = "the offers is finished"
       pop.appendChild(msg)
      // let pop2 = document.createElement("div")
      // pop.setAttribute('class', "pop2")
      // let msg2 = document.createElement("h2")
      //  msg2.innerHTML = "the offer is finished"
      // let pop3 = document.createElement("div")
      // pop.setAttribute('class', "pop3")
      // let msg3 = document.createElement("h2")
      //  msg3.innerHTML = "the offer is finished"
      
      // pop2.appendChild(msg2)
      // pop3.appendChild(msg3)
      // card.appendChild(pop)
      // card2.appendChild(pop2)
      // card3.appendChild(pop3)
    let body = document.getElementById("body")
    body.appendChild(pop)
     console.log(body)
    
  }
}, 1000);




// let sc = document.querySelector(".seconds")
// sc.innerHTML
// console.log(sc.innerHTML)
// let hr = document.querySelector(".hours")
// console.log(hr.innerHTML)
// let mn = document.querySelector(".minutes")
// console.log(mn.innerHTML)
//sconds
// let countdown = setInterval(function () {
// sc.innerHTML-=1


// },1000)
// if (hr.innerHTML == "0") {
// clearInterval(countdown)
// sc.innerHTML = "0"
// }
// },1000)

// //minutes
// let countdownM = setInterval(function () {
//   mn.innerHTML-=1
  
//   if (mn.innerHTML == "0" && hr!== "0") {
//   // clearInterval(countdown)
//   mn.innerHTML = "60"
  
//   }
//   if (hr.innerHTML == "0") {
//   clearInterval(countdownM)
//   }
//   },1000)
// let countdownM = setInterval(function () {
// mn.innerHTML-=1
// if (hr === "0") {
//   clearInterval(countdownM)
//   let mn = document.querySelector(".minutes")
//   mn.innerHTML = "0"
//  }
// if(mn === "0" && hr !== "0") {
//   let mn = document.querySelector(".minutes")
// mn.innerHTML = "60"

// }
 
 
// },1000 * 60)
//hours
// let countdownH = setInterval(function () {

// if (dateDiff < 0) {
//   clearInterval(countdown)
//   }
  // if (dateDiff < 0) {
  //   let button = document.querySelectorAll(".button")
  //   button.forEach((i =>{
  //   i.setAttribute("id", 'disabled')
  //   })) 
  //   let card = document.querySelector(".card")
  //   let card2 = document.querySelector(".card2")
  //   let card3 = document.querySelector(".card3")
  //   let pop = document.createElement("div")
  //   pop.setAttribute('class', "pop")
  //   let msg = document.createElement("h2")
  //    msg.innerHTML = "the offers is finished"
  //    pop.appendChild(msg)
  //   // let pop2 = document.createElement("div")
  //   // pop.setAttribute('class', "pop2")
  //   // let msg2 = document.createElement("h2")
  //   //  msg2.innerHTML = "the offer is finished"
  //   // let pop3 = document.createElement("div")
  //   // pop.setAttribute('class', "pop3")
  //   // let msg3 = document.createElement("h2")
  //   //  msg3.innerHTML = "the offer is finished"
    
  //   // pop2.appendChild(msg2)
  //   // pop3.appendChild(msg3)
  //   // card.appendChild(pop)
  //   // card2.appendChild(pop2)
  //   // card3.appendChild(pop3)
  // let body = document.getElementById("body")
  // body.appendChild(pop)
  //  console.log(body)
  
  // }
// },1000)
// end counter

// let button = document.querySelector("#b1")
// let button2 = document.querySelector("#b12")
// let button3 = document.querySelector("#b13")
// button.classList.add(class,disabeld)
// 3599999
// button.cl
// if (hr.innerHTML === "0") {
//   let button = document.querySelectorAll(".button")
//   button.forEach((i =>{
//   i.setAttribute("id", 'disabled')
//   })) 
//   let card = document.querySelector(".card")
//   let card2 = document.querySelector(".card2")
//   let card3 = document.querySelector(".card3")
//   let pop = document.createElement("div")
//   pop.setAttribute('class', "pop")
//   let msg = document.createElement("h2")
//    msg.innerHTML = "the offers is finished"
//    pop.appendChild(msg)
//   // let pop2 = document.createElement("div")
//   // pop.setAttribute('class', "pop2")
//   // let msg2 = document.createElement("h2")
//   //  msg2.innerHTML = "the offer is finished"
//   // let pop3 = document.createElement("div")
//   // pop.setAttribute('class', "pop3")
//   // let msg3 = document.createElement("h2")
//   //  msg3.innerHTML = "the offer is finished"
  
//   // pop2.appendChild(msg2)
//   // pop3.appendChild(msg3)
//   // card.appendChild(pop)
//   // card2.appendChild(pop2)
//   // card3.appendChild(pop3)
// let body = document.getElementById("body")
// body.appendChild(pop)
//  console.log(body)

// }

// clearInterval(countdown)


