'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables

const filterFunc = function (selectedValue) {
  for (let i = 0; i < portfolioItem.length; i++) {
    if (selectedValue === "all") {
      portfolioItem[i].classList.add("active");
    } else if (portfolioItem[i].dataset.category.split(",").includes(selectedValue)) {
      portfolioItem[i].classList.add("active");
    } else {
      portfolioItem[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

//Modal for portfolio

// testimonials variables
const portfolioItem = document.querySelectorAll("[portfolio-filter-item]");
const pmodalContainer = document.querySelector("[portfolio-modal-container]");
const pmodalCloseBtn = document.querySelector("[portfolio-modal-close-btn]");

// Images control
var iImg = 0;
var file = ["PockelsLab","7"];

// modal variable
const portfolioImg = document.querySelector("[portfolio-img]");
const portfolionImg = document.querySelector("[portfolio-nImg]");
const portfolioContent = document.querySelector("[portfolio-content]");
//const modalText = document.querySelector("[data-modal-text]");


function backImg(){
  if(iImg<=0) iImg = file[1];
  iImg--;
  return setImg();
}

function nextImg(){
  iImg++;
  if(iImg>=file[1]) iImg = 0;
  return setImg();
}

function setImg(){
  portfolionImg.innerHTML = "<p>"+(iImg+1).toString()+"/"+file[1]+"</p>";
  return portfolioImg.setAttribute('src',"./assets/images/portfolio/"+file[0]+"/"+(iImg+1).toString()+".png");
}

// modal toggle function
const portfolioModalFunc = function () {
  if (pmodalContainer.style.display == "block"){
    pmodalContainer.style.display = "none";
  }else{
    pmodalContainer.style.display = "block";
  }
}



// add click event to all modal items
for (let i = 0; i < portfolioItem.length; i++) {

  portfolioItem[i].addEventListener("click", function () {

    file = this.querySelector("[portfolio-dummy-img]").alt.split(",");
    iImg = 0;
    portfolioContent.innerHTML = this.querySelector("[portfolio-dummy]").innerHTML;
    //modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    //modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    //modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    //modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    portfolioModalFunc();
    setImg();

  });

}

// add click event to modal close button
pmodalCloseBtn.addEventListener("click", portfolioModalFunc);



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}