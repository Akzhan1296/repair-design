document.addEventListener('DOMContentLoaded', (e) => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close');

    console.log(modalBtn)

  const switchModal = () => {
      console.log(modal)
    modal.classList.toggle('modal--visible');
  }


  modalBtn.forEach(btn => btn.addEventListener('click', switchModal));

  //* Close button inside of modal handler
  closeBtn.addEventListener('click', switchModal);

  //* Click outside of modal handler 
  window.addEventListener('click', (e)=> e.target == modal && switchModal());
  //* Esc off modal handler 
  window.addEventListener('keydown', (e)=> modal.classList.contains('modal--visible') && e.key === 'Escape' && switchModal());
});