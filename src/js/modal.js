const backdropModal = document.querySelectorAll('.backdrop');
const refs = [
  {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-modal-location]'),
    body: document.body,
  },
  {
    openModalBtn: document.querySelector('[data-icecream-open]'),
    closeModalBtn: document.querySelector('[data-icecream-close]'),
    modal: document.querySelector('[data-modal-icecream]'),
    body: document.body,
  },
  {
    openModalBtn: document.querySelector('[data-coffee-open]'),
    closeModalBtn: document.querySelector('[data-coffee-close]'),
    modal: document.querySelector('[data-modal-coffee]'),
    body: document.body,
  },
  {
    openModalBtn: document.querySelector('[data-milkshake-open]'),
    closeModalBtn: document.querySelector('[data-milkshake-close]'),
    modal: document.querySelector('[data-modal-milkshake]'),
    body: document.body,
  },
  ////////////////////////////////
  {
    openModalBtn: document.querySelector('[data-header-modal-open1]'),
    closeModalBtn: document.querySelector('[data-header-modal-close1]'),
    modal: document.querySelector('[data-header-modal1]'),
    body: document.body,
  },
  ///////////////////////////////
  {
    openModalBtn: document.querySelector('[data-header-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
    body: document.body,
  },
  {
    openModalBtn: document.querySelector('[data-about-open]'),
    closeModalBtn: document.querySelector('[data-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
    body: document.body,
  },
  {
    openModalBtn: document.querySelector('[data-contacts-open]'),
    closeModalBtn: document.querySelector('[data-contacts-close]'),
    modal: document.querySelector('[data-modal-contacts]'),
    body: document.body,
  },
];

function toggleModal(modalElement) {
  modalElement.classList.toggle('is-hidden');
  document.body.classList.toggle('overflow');
}

function handleModal({ openModalBtn, closeModalBtn, modal }) {
  openModalBtn.addEventListener('click', toggleModal.bind(null, modal));
  closeModalBtn.addEventListener('click', toggleModal.bind(null, modal));
}

refs.forEach(handleModal);

//bakcdrops modal

