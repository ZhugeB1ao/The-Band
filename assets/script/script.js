const buyTickets = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const closeModals = document.querySelectorAll('.js-close-modal');
const modalContent = document.querySelector('.js-modal-content');
const hideNav = document.querySelector('#js-hide-nav');
const menuButton = document.querySelector('.js-menu-button');
const navBar = document.querySelector('.js-nav-bar');
const closeNavBar = document.querySelector('body');
const exceptCloseNavBar = document.querySelector('header');
const moveToSections = document.querySelectorAll('.js-click-section');

function showBuyTickets() {
    modal.classList.add('open');
}

function hideBuyTickets() {
    modal.classList.remove('open');
}

//for any buy ticket button is click => show modal
for(let buyTicket of buyTickets) {
    buyTicket.addEventListener('click', showBuyTickets);
}

// close modal
for (let closeModal of closeModals) {
    closeModal.addEventListener('click', hideBuyTickets);
}

// close if click outside of modal
modal.addEventListener('click', hideBuyTickets);

// except not close when click on modal
modalContent.addEventListener('click', function(event) {
    event.stopPropagation();
});

//open menu and close menu icon
function openNavBar() {
    menuButton.style.display = "none"
    hideNav.style.display = "block";
    navBar.classList.add('open-nav-bar');
    
    closeNavBar.addEventListener('click', hideNavBar);
    exceptCloseNavBar.addEventListener('click', function(event) {
        event.stopPropagation();
    })

    for (const moveToSection of moveToSections) { 
        moveToSection.addEventListener('click', hideNavBar); 
    }
}

//hide menu and display menu icon when click outside of menu area
function hideNavBar() {
    menuButton.style.display = "block"
    hideNav.style.display = "none";
    navBar.classList.remove('open-nav-bar');

    closeNavBar.addEventListener('click', hideNavBar);
    exceptCloseNavBar.addEventListener('click', function(event) {
        event.stopPropagation();
    })

    for (const moveToSection of moveToSections) { 
        moveToSection.addEventListener('click', hideNavBar); 
    }
}

menuButton.addEventListener('click', openNavBar);

window.addEventListener('resize', function() { 
    if (window.innerWidth > 740) { 
        menuButton.style.display = "none"; 
        hideNav.style.display = "block"; 
        navBar.classList.add('open-nav-bar'); 
    } 
    else { 
        menuButton.style.display = "block"; 
        hideNav.style.display = "none"; 
        navBar.classList.remove('open-nav-bar');
     } 
});

(function initializeMenuState() { 
    if (window.innerWidth > 740) { 
        menuButton.style.display = "none"; 
        hideNav.style.display = "block"; 
        navBar.classList.add('open-nav-bar'); 
    } 
    else { 
        menuButton.style.display = "block"; 
        hideNav.style.display = "none"; 
        navBar.classList.remove('open-nav-bar'); 
    } 
})();
