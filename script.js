'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModals = document.querySelectorAll('.show-modal');

const toggleModal = function () {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
};

btnCloseModal.addEventListener('click', () => toggleModal());
overlay.addEventListener('click', () => toggleModal());

for (let i = 0; i < btnShowModals.length; i++) {
    btnShowModals[i].addEventListener('click', () => toggleModal());
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        toggleModal();
    }
});
