
$(document).ready(() => {
  $('.item__tab__new').tab()
  $('.item__tab__hot').tab()
  AOS.init({
    once: true,
  })
  const tabSetting = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
  }
  const tabItemSetting = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
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
  new Swiper('.item__tab__new', tabSetting)
  new Swiper('.tab__content', tabItemSetting)
  // Sidebar toggle
  $('.category__expension__title').on('click', function () {
    $(this)
      .toggleClass('active')
      .next('.category__secondary')
      .slideToggle('fast')
  })
})
