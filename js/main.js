
const tabSetting = {
  slidesPerView: 'auto',
  spaceBetween: 0,
  grabCursor: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
}
const tabItemSetting = {
  slidesPerView: 2,
  spaceBetween: 0,
  grabCursor: true,
  breakpoints: {
    '720': {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}
$(document).ready(() => {
  $('#Sidebar').load('sidebar.html')
  $('#Footer').load('footer.html')
  $('.item__tab__new').tab()
  $('.item__tab__hot').tab()
  AOS.init({
    once: true,
  })
  new Swiper('.item__tab__new', tabSetting)
  new Swiper('.tab__content', tabItemSetting)
})
