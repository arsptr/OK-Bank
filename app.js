const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// pop up menu

// Get the modal
const modal = document.getElementById("popUp");

// Get the span terms that opens the modal
const open = document.getElementById("popUp__terms");

// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close") && document.getElementsByClassName("main__btn3")[0];

// When the user clicks the span terms, open the modal 
open.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}