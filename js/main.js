// darkmode
let darkmode = document.querySelector("#icon");
let icon = document.querySelector("#icon i ");
darkmode.addEventListener("click", function () {
  document.body.classList.toggle("whitetheme");
  if (document.body.classList.contains("whitetheme")) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }
});

// show sidebar

// line progress
let section = document.getElementById("experinces");
let spans = document.querySelectorAll(".profession .skill .progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.innerHTML = `${span.dataset.width}`;
    });
  }
};


// testimonials

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// show , hide question

let items = document.querySelectorAll(".knoweledge .item");
items.forEach((item, index) => {
  const header = item.querySelector(".card");
  let answer = item.querySelector(".content");
  let arrow = item.querySelector("i");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
    if (item.classList.contains("open")) {
      answer.style.height = `${answer.scrollHeight}px`;
      arrow.classList.replace("fa-angles-right", "fa-angles-down");
    } else {
      answer.style.height = "0px";
      arrow.classList.replace("fa-angles-down", "fa-angles-right");
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  items.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".content");
      des.style.height = "0px";
      item2
        .querySelector("i")
        .classList.replace("fa-angles-down", "fa-angles-right");
    }
  });
}

let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
});



window.addEventListener('scroll', () => {
    let header = document.querySelector("header")
    const scroll = window.scrollY;
  
    if (scroll >= 120 && document.body.classList.contains("whitetheme")) {
      header.style.backgroundColor ="#d7e3ff" ;
 
    } else if (scroll >= 120) {
      header.style.backgroundColor = '#002f65';
    }
    else{
      header.style.backgroundColor = '';

    }
  });

  
  ScrollReveal({
    reset: true ,
    distance :'40px',
    duration:2000,
    delay:300,
   

    });
    ScrollReveal().reveal('.home .text', { delay: 100  , origin:'bottom' ,distance :'200px'});
    ScrollReveal().reveal('.head-title', { origin:'bottom' ,distance :'50px' , delay:100});
    ScrollReveal().reveal('.techskill .js ', { delay: 100  , origin:'bottom' , distance:'200px'});
    ScrollReveal().reveal('.techskill .tailw ', { delay: 300  , origin:'bottom' , distance:'200px'});
    ScrollReveal().reveal('.techskill .angular ', { delay: 600  , origin:'bottom' , distance:'200px'});
    ScrollReveal().reveal('.techskill .react ', { delay: 900  , origin:'bottom' , distance:'200px'});

    
let links = document.querySelectorAll("header .link a")
links.forEach((link)=>{
  link.addEventListener("click", function(){
    menus.style.display = "none"
  })
})


