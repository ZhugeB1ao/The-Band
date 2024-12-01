const buyTickets = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const closeModals = document.querySelectorAll('.js-close-modal');
const modalContent = document.querySelector('.js-modal-content');

function showBuyTickets() {
    modal.classList.add('open');
}

function hideBuyTickets() {
    modal.classList.remove('open');
}

//for any buy ticket button is click => show modal
for(const buyTicket of buyTickets) {
    buyTicket.addEventListener('click', showBuyTickets);
}

// close modal
for (const closeModal of closeModals) {
    closeModal.addEventListener('click', hideBuyTickets);
}

// close if click outside of modal
modal.addEventListener('click', hideBuyTickets);

// except not close when click on modal
modalContent.addEventListener('click', function (event) {
    event.stopPropagation();
});