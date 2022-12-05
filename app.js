// Sticky navigation 
// ===================

let navigation = document.querySelector('header');

window.onscroll = function () {
  let navigation = document.querySelector('header');
  let sticky = navigation.offsetTop;
  if (window.pageYOffset > sticky) {
    navigation.classList.add("sticky")
  }
  else {
    navigation.classList.remove("sticky")
  }
}

// Project counter 
// ====================
let counter = document.getElementById('counter');
let interval = 300;
let start = 0;
let end = parseInt(counter.getAttribute('data-val'));
let duration = Math.round(interval / end);
let counterValues = setInterval(() => {
  start += 1;
  counter.textContent = start + "+";
  if (start === end) {
    clearInterval(counterValues)
  }
}, duration)



// services section for mobile 
// =============================

const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("active");
  });

  contents.forEach((c) => {
    c.classList.remove("active");
  });
};

tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");
  });
});






// FAQ
// ========== 
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



// Type text effect 
// ===================
new TypeIt("#welcometext", {
  breakLines: false,
  startDelay: 500,
  speed: 50,
  loop: false,
  waitUntilVisible: true
}).go();




// Mobile Navigation 
// ==================
let mobile_nav = document.querySelector('.mobile_nav');
document.querySelector("#nav-toggle")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    mobile_nav.classList.toggle("show")
  });






// Services For Mobile 
// =====================
let question = document.querySelectorAll(".question");
question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})



// popup 
let book_btn = document.getElementById('book_btn');
book_btn.addEventListener("click",()=>{
  alert("yes")
})



