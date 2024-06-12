const navbar = document.querySelector('.navbar');
const menuicon = document.querySelector('#menu-icon');
const header = document.querySelector('header');
let heigth=document.querySelector('.container').offsetHeight;
let navcolor = false;
menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    if (navcolor == false) {
        header.classList.toggle('sticky');
        navbar.classList.toggle('sticky');
    }
})

const links = document.querySelectorAll('.navbar a');
links.forEach(
    link => {

        link.addEventListener('click', () => {
            links.forEach(i => {
                i.classList.remove('active');
            })
            link.classList.add('active')
            menuicon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        })
    }
)

window.addEventListener('scroll', () => {
    if(window.scrollY > heigth){
        navcolor=true;
    }
    else{
        navcolor=false;
    }
    header.classList.toggle('sticky', window.scrollY > heigth);
})

let sections = document.querySelectorAll('.section-scroll');
let navLinks = document.querySelectorAll('.navbar a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(id);
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};