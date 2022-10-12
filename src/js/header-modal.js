(() => {
    const refs = {
        openModalBtnTablet: document.querySelector('[data-modal-tablet-open]'),
        openModalBtn: document.querySelector('[data-modal-mobile-open]'),
        closeModalBtn: document.querySelector('[data-header-modal-close]'),
        modal: document.querySelector('[data-header-modal]'),
        body: document.body,
    };

    refs.openModalBtnTablet.addEventListener('click', toggleModal);
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('overflow')
    }
})();
