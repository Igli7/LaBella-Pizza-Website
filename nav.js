// function to select the element

const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    selectElement('.nav-list').classList.toggle('active');
    selectElement('nav').classList.toggle('active');
    selectElement('.nav-list>li').classList.toggle('active');
})



// Navigation style on scroll
const nav = document.querySelector("#navigation");
const sectionOne = document.querySelector("header");

const sectionOneOptions = {
  rootMargin: "-650px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);