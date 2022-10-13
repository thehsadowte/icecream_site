const refs = [
  {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-modal-location]'),
    body: document.body,
  },
  {
    openModalBtn: document.querySelector('[data-products-open]'),
    closeModalBtn: document.querySelector('[data-products-close]'),
    modal: document.querySelector('[data-modal-products]'),
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
