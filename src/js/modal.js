const backdropModal = document.querySelectorAll('.backdrop');
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

backdropModal.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('is-hidden');
    document.body.classList.remove('overflow');
  });
});