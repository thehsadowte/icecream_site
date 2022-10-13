(() => {
    const refs = {
        openModalBtn1: document.querySelector('[data-header-modal-open1]'),
        openModalBtn2: document.querySelector('[data-header-modal-open-2]'),
        closeModalBtn: document.querySelector('[data-header-modal-close]'),
        modal: document.querySelector('[data-header-modal]'),
        body: document.body,
    };

    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('overflow')
    }
})();
