$(document).ready( function() {
  let modal = $('.modal'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close');
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  })
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  })

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  let next = $('.swiper-button-next');
  let prev = $('.swiper-button-prev');
  let bullets=$('.swiper-pagination');


  next.css('left', prev.width() +10 + bullets.width() + 10);
  bullets.css('left', prev.width() +10);
});


// document.addEventListener('DOMContentLoaded', (e) => {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]')
//   const closeBtn = document.querySelector('.modal__close');

//     console.log(modalBtn)

//   const switchModal = () => {
//       console.log(modal)
//     modal.classList.toggle('modal--visible');
//   }


//   modalBtn.forEach(btn => btn.addEventListener('click', switchModal));

//   //* Close button inside of modal handler
//   closeBtn.addEventListener('click', switchModal);

//   //* Click outside of modal handler 
//   window.addEventListener('click', (e)=> e.target == modal && switchModal());
//   //* Esc off modal handler 
//   window.addEventListener('keydown', (e)=> modal.classList.contains('modal--visible') && e.key === 'Escape' && switchModal());
// });