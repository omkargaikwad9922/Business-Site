// NAVBAR-RESPONSIVE
const navlinks = document.querySelector(".navbar");
const navs = document.querySelectorAll(".nav-links");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});

for (let nav of navs) {
  nav.addEventListener("click", () => {
    navlinks.classList.toggle("mobile-menu");
  });
}

// login Pop
const ctn = document.querySelector(".ctn");
const pass = document.querySelector("#pass");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const popup = document.querySelector(".popup");
const cancel = document.querySelector("#cancel");

let curr = true;
ctn.addEventListener("click", () => {
  if (curr) {
    curr = false;
    popup.style.display = "block";
    navlinks.classList.toggle("mobile-menu");
  } else {
    curr = true;
    popup.style.display = "none";
    navlinks.classList.toggle("mobile-menu");
  }
});

cancel.addEventListener("click", () => {
  popup.style.display = "none";
});

// Password Show
let show = true;

pass.addEventListener("click", () => {
  if (show) {
    show = false;
    password.setAttribute("type", "text");
  } else {
    show = true;
    password.setAttribute("type", "password");
  }
});

login.addEventListener("click", () => {
  if (username.value === "") {
    alert("Please Enter the User name");
  } else {
    confirm(`Username:- ${username.value} 
password:- ${password.value}`);
  }
});

// Loader
window.onload = function () {
  setTimeout(function () {
    const loader = document.querySelector(".spinner");
    loader.style.display = "none";
    document.body.style.overflow = "auto";
  }, 2000);
};
//  header
const header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  const top = document.documentElement.scrollTop;
  if (top > 0) {
    header.classList.add("static");
    navs.forEach((a) => {
      a.classList.add("active");
    });
  } else {
    header.classList.remove("static");
    navs.forEach((a) => {
      a.classList.remove("active");
    });
  }
});

// SWIPER
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// cards

var swipers = new Swiper(".Swiper", {
  slidesPerView: 2,

  spaceBetween: 50,
});

// request call

const btn = document.querySelector(".btn");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Fill The Message");
  } else {
    alert("Request Send Succesfully");
    window.location.reload();
  }
});

// Our Finance

function showContext(buttonNumber) {
  const image = document.getElementById("image");
  const text = document.getElementById("text");
  const para = document.getElementById("para");

  if (buttonNumber === 1) {
    image.src = "assets/single_service_01.jpg";
    text.innerText = "Market Analysis";
    para.innerText =
      "Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.";
  } else if (buttonNumber === 2) {
    image.src = "assets/single_service_02.jpg";
    text.innerText = "Financial Data";
    para.innerText =
      "Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.";
  } else if (buttonNumber === 3) {
    image.src = "assets/single_service_03.jpg";
    text.innerText = "Accounting Services";
    para.innerText =
      "Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.";
  } else if (buttonNumber === 4) {
    image.src = "assets/single_service_04.jpg";
    text.innerText = "Overall Evaluation";
    para.innerText =
      "Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.";
  }
}
